import { WorkExperienceLang } from "@/lib/lang/ExperienceCardLang";
import Image from "next/image";
import React from "react";
import { Youtube, Bookmark, Ellipsis } from "lucide-react";
import { Separator } from "../ui/Separator";
import { Icon } from "@/assets/icons";

const ExperienceCard = () => {
  return (
    <div className="space-y-4">
      {WorkExperienceLang.WorkExperience.map((item) => (
        <div key={item.title}>
          <div className="flex gap-4 items-start">
            <Image
              src={item.logo}
              alt={item.title}
              className="rounded-xl aspect-square size-[90px]"
            />

            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center text-sm font-semibold">
                <Youtube className="size-4 text-primary dark:text-white" />#
                {item.title} - {item.company}
              </p>
              <p className="text-primary dark:text-white text-xs">
                {item.startDate} - {item.endDate}
              </p>

              <p className=" text-primary dark:text-white text-xs">
                {item.description}
              </p>

              <div className="flex items-center gap-2.5">
                <Icon.PlayRounded className="size-6" />
                <Bookmark className="size-3.5 text-primary dark:text-white" />
                <Icon.AddToPlaylist className="size-3.5 stroke-primary dark:stroke-white" />
                <Icon.Download className="size-3.5 stroke-primary dark:stroke-white" />
                <Icon.Share className="size-3.5 stroke-primary dark:stroke-white" />
                <Ellipsis className="size-3.5 stroke-primary dark:stroke-white" />
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-accent mt-3" />
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
