import AStudio from "./AStudio";
import Bitbucket from "./Bitbucket";
import Css from "./Css";
import Express from "./Express";
import Figma from "./Figma";
import Framer from "./Framer";
import Git from "./Git";
import Github from "./Github";
import Html from "./Html";
import Javascript from "./Javascript";
import Jira from "./Jira";
import Mui from "./Mui";
import Nextjs from "./Nextjs";
import Node from "./Node";
import Npm from "./Npm";
import Photoshop from "./Photoshop";
import Postman from "./Postman";
import Python from "./Python";
import React from "./React";
import Shadcn from "./Shadcn";
import Socket from "./Socket";
import Tailwind from "./Tailwind";
import Typescript from "./Typescript";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const SkillIcon = {
  AStudio: (props: IconProps) => <AStudio {...props} />,
  Bitbucket: (props: IconProps) => <Bitbucket {...props} />,
  Css: (props: IconProps) => <Css {...props} />,
  Express: (props: IconProps) => <Express {...props} />,
  Figma: (props: IconProps) => <Figma {...props} />,
  Framer: (props: IconProps) => <Framer {...props} />,
  Git: (props: IconProps) => <Git {...props} />,
  Github: (props: IconProps) => <Github {...props} />,
  Html: (props: IconProps) => <Html {...props} />,
  Javascript: (props: IconProps) => <Javascript {...props} />,
  Jira: (props: IconProps) => <Jira {...props} />,
  Mui: (props: IconProps) => <Mui {...props} />,
  Nextjs: (props: IconProps) => <Nextjs {...props} />,
  Node: (props: IconProps) => <Node {...props} />,
  Npm: (props: IconProps) => <Npm {...props} />,
  Photoshop: (props: IconProps) => <Photoshop {...props} />,
  Postman: (props: IconProps) => <Postman {...props} />,
  Python: (props: IconProps) => <Python {...props} />,
  React: (props: IconProps) => <React {...props} />,
  Shadcn: (props: IconProps) => <Shadcn {...props} />,
  Socket: (props: IconProps) => <Socket {...props} />,
  Tailwind: (props: IconProps) => <Tailwind {...props} />,
  Typescript: (props: IconProps) => <Typescript {...props} />,
};

export const SkillIcons = [
  {
    name: "AStudio",
    icon: SkillIcon.AStudio,
  },
  {
    name: "Bitbucket",
    icon: SkillIcon.Bitbucket,
  },
  {
    name: "Css",
    icon: SkillIcon.Css,
  },
  {
    name: "Express",
    icon: SkillIcon.Express,
  },
  {
    name: "Figma",
    icon: SkillIcon.Figma,
  },
  {
    name: "Framer",
    icon: SkillIcon.Framer,
  },
  {
    name: "Git",
    icon: SkillIcon.Git,
  },
  {
    name: "Github",
    icon: SkillIcon.Github,
  },
  {
    name: "Html",
    icon: SkillIcon.Html,
  },
  {
    name: "Javascript",
    icon: SkillIcon.Javascript,
  },
  {
    name: "Jira",
    icon: SkillIcon.Jira,
  },
  {
    name: "Mui",
    icon: SkillIcon.Mui,
  },
  {
    name: "Nextjs",
    icon: SkillIcon.Nextjs,
  },
  {
    name: "Node",
    icon: SkillIcon.Node,
  },
  {
    name: "Npm",
    icon: SkillIcon.Npm,
  },
  {
    name: "Photoshop",
    icon: SkillIcon.Photoshop,
  },
  {
    name: "Postman",
    icon: SkillIcon.Postman,
  },
  {
    name: "Python",
    icon: SkillIcon.Python,
  },
  {
    name: "React",
    icon: SkillIcon.React,
  },
  {
    name: "Shadcn",
    icon: SkillIcon.Shadcn,
  },
  {
    name: "Socket",
    icon: SkillIcon.Socket,
  },
  {
    name: "Tailwind",
    icon: SkillIcon.Tailwind,
  },
  {
    name: "Typescript",
    icon: SkillIcon.Typescript,
  },
];
