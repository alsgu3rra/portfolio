"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Nest.js</li>
        <li>Fastfy.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>Bootstrap</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Html/Css/Scss</li>
        <li>Angular</li>
        <li>Tailwind Css</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Computação em Nuvem com AWS</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("backend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Back-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Front-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
