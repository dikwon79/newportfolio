import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

// 컨테이너 스타일
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgb(237, 231, 246);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  padding: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5%;
  text-align: center;
`;

// 폼 스타일
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 20; /* FlipPage보다 더 높은 z-index를 설정 */
  pointer-events: auto; /* 클릭 활성화 */

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: inset 0 1px 3px rgba(0, 123, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  height: 150px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div<{ success: boolean }>`
  margin-top: 1rem;
  color: ${(props) => (props.success ? "green" : "red")};
  font-size: 1rem;
`;

function Contact() {
  const [formData, setFormData] = useState({
    senderEmail: "",
    senderName: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // EmailJS에서 발급받은 서비스 ID
        "YOUR_TEMPLATE_ID", // EmailJS에서 발급받은 템플릿 ID
        {
          sender_email: formData.senderEmail,
          sender_name: formData.senderName,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_USER_ID" // EmailJS 사용자 ID
      )
      .then(
        () => {
          setFeedback("Email sent successfully!");
          setFormData({
            senderEmail: "",
            senderName: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setFeedback("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="senderEmail"
          placeholder="Your Email"
          value={formData.senderEmail}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="senderName"
          placeholder="Your Name"
          value={formData.senderName}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
        {feedback && (
          <Message success={feedback === "Email sent successfully!"}>
            {feedback}
          </Message>
        )}
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
