"use client";

import React from "react";
import { AnimatedSubscribeButton } from "../ui/AnimatedSubscribeButton";
import { Button } from "../ui/Button";
import { StarIcon, Ellipsis, ArrowDownUp, Search } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div id="header" className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">My Professional Experience</h1>
        <p className="text-xxs font-medium">Yancee Villanueva</p>
        <div className="flex gap-3 items-center">
          <AnimatedSubscribeButton
            subscribeStatus={false}
            initialText={
              <span className="group inline-flex items-center">Follow </span>
            }
            changeText={
              <span className="group inline-flex items-center">Followed </span>
            }
          />
          <Button
            variant="outline"
            className="text-xxs hover:bg-transparent cursor-default"
          >
            4.8{" "}
            <StarIcon
              className="size-3 mx-3"
              color={"#FEDC32"}
              fill={"#FEDC32"}
            />
            213k
          </Button>
          <Ellipsis className="size-5" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">All Episodes</h2>
          <div className="flex gap-3">
            <span className="text-xxs flex items-center gap-2">
              <ArrowDownUp className="size-4" /> New
            </span>
            <span className="text-xxs flex items-center gap-2">
              <ArrowDownUp className="size-4" /> All Episodes
            </span>
            <Search className="size-4" />
          </div>
        </div>
        <div>
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
