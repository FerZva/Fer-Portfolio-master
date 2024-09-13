import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/EasyBank.jpg";
import rmtdevImg from "@/public/Countries-API.jpg";
import worldbushidoImg from "@/public/worldbushidofederation.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Full Stack Web Developer Carrier",
    location: "Udemy",
    description:
      "I graduated after 1 year of studying. I immediately started to look for a job as a Full Stack Web Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Softwre Developer",
    location: "Honduras",
    description:
      "I worked as a software developer for 2 years on Emanú International a Security Company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Freelance",
    location: "Remote",
    description:
      "I'm now a Full Stack developer working as a freelancer. My stack includes React, Next.js, Angular, TypeScript, Tailwind, NodeJS, MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "EasyBank",
    description:
      "Landing page for a bank that challenge me throghout the developmenent process",
    tags: ["React", "Typescript", "SASS", "Vite"],
    imageUrl: corpcommentImg,
  },
  {
    title: "REST Countries API with color theme switcher",
    description:
      "This is one of my favourites proyect becuase the challenge to display data from an API was very interesting",
    tags: ["React", "TypeScript", "Next.js", "SASS", "Styled Components"],
    imageUrl: rmtdevImg,
  },
  {
    title: "World Bushido Federation",
    description:
      "A martial artist academy which trust on my to create from scratch their website that include suscriptions and other products which also is powered by stripe",
    tags: ["Next.js", "SASS", "Javascript", "NodeJS"],
    imageUrl: worldbushidoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "SASS",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "MS SQL SERVER",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
