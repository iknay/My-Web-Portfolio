"use client";
import React, { useState } from "react";
import { Dock, DockIcon } from "@/components/ui/Dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import ThemeToggle from "./ThemeToggle";
import { DATA } from "@/lib/lang/NavigationIconsLang";

const NavigationBar = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full pb-6 z-50">
      <TooltipProvider>
        <Dock
          direction="middle"
          className={cn(
            "shadow-lg rounded-full",
            currentTheme === "light" ? "bg-white" : "bg-primary"
          )}
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className={`h-full py-2 ${
              currentTheme === "light" ? "bg-gray-200" : "bg-gray-600"
            }`}
          />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className={`h-full py-2 ${
              currentTheme === "light" ? "bg-gray-200" : "bg-gray-600"
            }`}
          />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle onThemeChange={setCurrentTheme} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default NavigationBar;
