"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Node.js</li> */}
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>TailWind CSS</li>
        <li>Vue.js</li>
        <li>Next.js</li>
        <li>Github</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Wordpress</li>
        <li>Flutter</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Coding Academy by Epitech </li>
        <li>Université Virtuelle de Côte d&apos;Ivoire</li>
        <li>Baccalauréat Serie D</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li> */}
        <li>Certification en Developpement Fullstack (We.Code)</li>
        <li>Certificat en développement
        d&apos;application mobile Android (CSC-TIC) </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Photos.png" alt="" width={500} height={500} className="bg-white rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Qui Suis-je ?</h2>
          <p className="text-base lg:text-lg">
            {/* I am a fullstack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Vue.js,HTML, CSS,Tailwind, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.  */}
            
            Je suis un développeur web fullstack avec une passion pour la création d&apos;applications web interactives et réactives.
            J&apos;ai de l&apos;expérience avec JavaScript, React, Vue.js, HTML, CSS, Tailwind et Git. 
            J&apos;apprends rapidement et je cherche toujours à élargir mes connaissances et mon ensemble de compétences.
            Je suis un joueur d&apos;équipe et je suis enthousiaste à l&apos;idée de travailler avec d&apos;autres pour créer des applications étonnantes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificat{" "}
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
