import React from "react";
import { Badge } from "../ui/Badge";
import { Github, Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  href: string;
  github: string;
  label: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
}

const Projects = ({
  href,
  github,
  label,
  description,
  technologies,
  image,
}: ProjectsProps) => {
  return (
    <div className="grid max-w-sm backdrop-blur-[100px] bg-white/50 dark:bg-opacity-10 dark:bg-black shadow-md rounded-lg border border-gray-200 dark:border-gray-200">
      <Image
        src={image}
        alt={label}
        className="w-full md:h-[200px] h-[150px] object-cover rounded-t-lg shadow-sm"
      />
      <div className="p-3 grid space-y-3">
        <p className="md:text-lg text-base font-semibold">{label}</p>
        <p className="md:text-sm text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {href !== "" && (
            <Badge
              variant="secondary"
              className="flex items-center gap-2 h-7 cursor-pointer"
              onClick={() => window.open(href, "_blank")}
            >
              <Globe width={14} height={14} /> <span>Website</span>
            </Badge>
          )}
          {github !== "" && (
            <Badge
              variant="secondary"
              className="flex items-center gap-2 h-7 cursor-pointer"
              onClick={() => window.open(github, "_blank")}
            >
              <Github width={14} height={14} /> <span>Github</span>
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
