"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "توانایی های من",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Reactjs</li>
        <li>Nextjs</li>
        <li>TTailwindCSS</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>MySQL</li>
        <li>MSSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "آموزش",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of Shiraz,Iran</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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
    <section className="text-white" id="about" dir="ltr">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0  flex flex-col h-full text-justify"  dir="rtl">
          <h2 className="text-4xl font-bold text-white mb-4">درباره من</h2>
          <p className="text-base lg:text-lg ">
          من یک توسعه دهنده Full-Stack حرفه ای برنامه های وب تعاملی هستم
  . من تجربه ی
 کار با JavaScript ، React ، Redux ، Node.js ، Express ، PostgreSQL ،
 Sequelize ، HTML ، CSS و GIT ,... را دارم. من در یادگیری سریع هستم و همیشه
 به دنبال گسترش دانش و مهارت خود هستم. من یک بازیکن تیم هستم و
 من از کار با دیگران برای ایجاد برنامه های شگفت انگیز هیجان زده ام.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              توانایی ها{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              آموزش{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              مقام ها{" "}
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
