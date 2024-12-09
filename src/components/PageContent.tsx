import React from "react";

type PageContentProps = {
  pageName: string;
};

function PageContent({ pageName }: PageContentProps) {
  const contentMap: Record<string, string> = {
    Home: "Welcome to my portfolio!",
    About: "I am a passionate software developer.",
    Projects: "Check out my awesome projects.",
    Contact: "Feel free to contact me at email@example.com.",
  };

  return <p>{contentMap[pageName]}</p>;
}

export default PageContent;
