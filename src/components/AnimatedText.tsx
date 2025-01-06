import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

type AnimatedTextProps = {
  text: string; // 애니메이션을 적용할 텍스트
};

const TextContainer = styled.div`
  display: inline-flex; /* 글자를 수평으로 배치 */
  font-size: 80%; /* 텍스트 크기 */
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    display: block;
  }
`;

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [isAnimating, setIsAnimating] = React.useState(true);

  React.useEffect(() => {
    // 반복 애니메이션 구현
    const timeout = setTimeout(() => {
      setIsAnimating(false); // 텍스트 사라짐
      setTimeout(() => setIsAnimating(true), text.length * 0.1 * 1000 + 1000); // 다시 시작
    }, text.length * 0.1 * 1000 + 2000); // 모든 글자 애니메이션 + 대기 시간
    return () => clearTimeout(timeout);
  }, [isAnimating, text]);

  return (
    <TextContainer>
      <AnimatePresence>
        {isAnimating &&
          text.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{
                display: "inline-block",
              }}
              initial={{ opacity: 0, y: 10 }} // 초기 상태: 투명하고 약간 아래
              animate={{ opacity: 1, y: 0 }} // 나타날 때: 불투명하고 제자리로 이동
              exit={{
                opacity: 0,
                y: 10,
                transition: {
                  delay: (text.length - 1 - index) * 0.1, // 뒤에서부터 딜레이 적용
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }} // 사라질 때: 아래로 내려가며 투명
              transition={{
                delay: index * 0.1, // 나타날 때 순차적 딜레이
                duration: 0.3, // 지속 시간
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
      </AnimatePresence>
    </TextContainer>
  );
};

export default AnimatedText;
