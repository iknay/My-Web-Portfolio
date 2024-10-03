"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import profile from "@/assets/images/mypic.png";
import { Button } from "@/components/ui/Button";
import WorkExperience from "@/components/customs/WorkExperience";
import { Cover } from "@/components/ui/Cover";
import SparklesText from "@/components/ui/SparklesText";
import Skills from "@/components/customs/Skills";
import ProjectsTimeline from "@/components/customs/ProjectsTimeline";
import ContactForm from "@/components/customs/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <header>
        <p className={cn("text-secondary text-start text-4xl font-bold")}>
          yancee.
        </p>
      </header>

      <section id="home" className="flex gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-7xl text-5xl font-semibold">
            Gaming guru by night,
            <br />
            <Cover>code wizard</Cover> by day.
          </h1>
          <span className="flex gap-4">
            <Button
              variant="default"
              size="lg"
              className="px-4 dark:hover:text-secondary hover:text-secondary hover:bg-primary dark:hover:bg-white"
              onClick={() => {
                window.location.href = "#projects";
              }}
            >
              see my works
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-4"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              contact me
            </Button>
          </span>
          <WorkExperience />
        </div>

        <div className="relative md:relative hidden md:block">
          <Image src={profile} alt="profile" width={600} height={680} />
          {/* <div className="absolute top-[20%] left-[-100px] animate-fadeIn">
            <div className="absolute backdrop-blur-3xl bg-black/1 rounded-lg size-full"></div>
            <Image
              src={bubble1}
              alt="Front End Dev"
              width={150}
              height={150}
              className="relative z-10 p-4"
              quality={100}
              unoptimized
            />
          </div>
          <Image
            src={bubble2}
            alt="Game Controller"
            width={150}
            height={150}
            className="absolute top-[-50px] right-[-20%] animate-fadeIn"
          />
          <Image
            src={bubble3}
            alt="Yancee"
            width={150}
            height={150}
            className="absolute top-[35%] right-[-75px] animate-fadeIn animation-delay-1000"
          /> */}
        </div>
      </section>

      <section
        id="skills"
        className="flex flex-col gap-10 items-center justify-center h-full rounded-3xl py-16 relative overflow-hidden"
      >
        <div className=" flex flex-col gap-4 items-center justify-center">
          <SparklesText
            text="Bringing Designs to Life"
            className="text-4xl font-inter font-semibold text-center"
            sparklesCount={5}
          />
          <p className="text-center max-w-md">
            Translating designs into dynamic, user-friendly interfaces using
            modern front-end frameworks and tools.
          </p>
          <button className="px-4 font-semibold text-sm flex gap-2 dark:text-white group relative">
            <span className="relative">
              View my resume 👩‍💻
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-pink-200 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </div>

        <Skills />
      </section>

      <section id="projects" className="h-full pb-20">
        <ProjectsTimeline />
      </section>

      <section
        id="contact"
        className="lg:h-[75vh] h-full lg:mx-20 lg:mb-0 mx-0 mb-20"
      >
        <ContactForm />
      </section>
    </div>
  );
}
