/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Timeline } from "../ui/Timeline";
import Projects from "./Projects";
import { ProjectsCardLang } from "@/lib/lang/ProjectsCardLang";

const ProjectsTimeline = () => {
  const data = [
    ...ProjectsCardLang.projects.map((yearGroup) => ({
      title: yearGroup.year,
      content: (
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 space-y-4">
          {yearGroup.items.map((project) => (
            <Projects
              key={project.label}
              {...project}
              image={project.image!}
              github={project.github ?? ""}
            />
          ))}
        </div>
      ),
    })),
  ];

  return (
    <div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default ProjectsTimeline;
