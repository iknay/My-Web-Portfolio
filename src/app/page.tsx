"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import profile from "@/assets/images/mypic.png";
import { Button } from "@/components/ui/Button";
import WorkExperience from "@/components/customs/WorkExperience";
import { Cover } from "@/components/ui/Cover";
import { MoveRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { SkillIcons } from "@/assets/icons/skillicons";
import SparklesText from "@/components/ui/SparklesText";

export default function Home() {
  const firstRow = SkillIcons.slice(0, SkillIcons.length / 2);
  const secondRow = SkillIcons.slice(SkillIcons.length / 2);
  return (
    <div className="flex flex-col gap-16">
      <header>
        <p className={cn("text-secondary text-start text-4xl font-bold")}>
          yancee.
        </p>
      </header>

      <section id="home" className="flex gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-7xl font-semibold">
            Gaming guru by night, <br /> at <Cover>code wizard</Cover> by day.
          </h1>
          <span className="flex gap-4">
            <Button variant="default" size="lg" className="px-4">
              see my works
            </Button>
            <Button variant="outline" size="lg" className="px-4">
              contact me
            </Button>
          </span>
          <WorkExperience />
        </div>

        <div>
          <Image src={profile} alt="profile" width={600} height={680} />
        </div>
      </section>

      <section
        id="skills"
        className="flex flex-col gap-10 items-center justify-center h-full rounded-3xl py-16 relative overflow-hidden"
      >
        <div className=" flex flex-col gap-4 items-center justify-center">
          <SparklesText
            text="Bringing Designs to Life"
            className="text-4xl font-inter font-semibold"
            sparklesCount={6}
          />
          <p>
            Translating designs into dynamic, user-friendly interfaces using
            modern front-end frameworks and tools.
          </p>
          <Button
            variant="link"
            className="px-4 underline font-semibold text-sm flex gap-2 dark:text-white"
          >
            View my resume
            <MoveRight className="w-4 h-4 underline" />
          </Button>
        </div>

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
      </section>
    </div>
  );
}
