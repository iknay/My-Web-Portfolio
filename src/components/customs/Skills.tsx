import React from "react";
import { Marquee } from "../ui/Marquee";
import { SkillIcons } from "@/assets/icons/skillicons";

const Skills = () => {
  const firstRow = SkillIcons.slice(0, SkillIcons.length / 2);
  const secondRow = SkillIcons.slice(SkillIcons.length / 2);
  return (
    <div
      className="w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 30%, black 30%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 30%, black 30%, transparent)",
      }}
    >
      <Marquee className="[--duration:30s]">
        {firstRow.map((skill) => (
          <div key={skill.name}>{skill.icon({ className: "size-56" })}</div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s]">
        {secondRow.map((skill) => (
          <div key={skill.name}>{skill.icon({ className: "size-56" })}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
