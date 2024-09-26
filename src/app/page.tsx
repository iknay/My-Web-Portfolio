"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import profile from "@/assets/images/mypic.png";
import { Button } from "@/components/ui/Button";
import WorkExperience from "@/components/customs/WorkExperience";
import { Cover } from "@/components/ui/Cover";
import IconCloud from "@/components/ui/IconCloud";
import { SkillsSlugs } from "@/lib/lang/SkillsLang";

export default function Home() {
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

      <section id="skills">
        <h2 className="text-5xl font-semibold">Skills</h2>
        <div></div>
        <IconCloud iconSlugs={SkillsSlugs} />
      </section>
    </div>
  );
}
