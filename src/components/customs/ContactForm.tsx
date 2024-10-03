import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import emailjs from "emailjs-com";
import { toast } from "@/components/hooks/useToast";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formState.email && formState.message) {
      emailjs
        .sendForm(
          "gmail",
          "template_7amu1v8",
          e.currentTarget,
          "ikAAtWytT81Fh1Ivm"
        )
        .then(
          () => {
            toast({
              title: "Message sent successfully",
              description:
                "Thank you for reaching out. I'll get back to you soon!",
            });
            setIsLoading(false);
            setFormState({ name: "", email: "", message: "" });
          },
          (error) => {
            toast({
              title: "Failed to send message. Please try again.",
              description: error.text,
              variant: "destructive",
            });
            setIsLoading(false);
          }
        );
    } else {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  return (
    <>
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
      {/* <div className="custom"></div> */}
      <div className="lg:flex-row flex flex-col lg:justify-between text-center lg:text-left lg:items-center h-full w-full">
        <div className="flex-1">
          <p className="lg:text-6xl text-4xl font-bold mb-4">Get in touch</p>

          <p className="lg:text-xl text-base font-semibold mb-2">
            Have questions about my work?
          </p>
          <p className="lg:text-xl text-base mb-4 max-w-md text-gray-600 dark:text-gray-400">
            Feel free to reach out if you&apos;d like to know more about my
            projects, skills, or experience. I&apos;m happy to chat!
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="space-y-4 flex flex-col gap-4 justify-center h-full w-full flex-1"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-2 gap-2">
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                className="w-full resize-none backdrop-blur-[50px] bg-opacity-20 bg-white dark:bg-opacity-10 dark:bg-black rounded-lg border-4 border-gray-700 dark:border-gray-200"
              />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={handleChange}
                className="w-full resize-none backdrop-blur-[50px] bg-opacity-20 bg-white dark:bg-opacity-10 dark:bg-black rounded-lg border-4 border-gray-700 dark:border-gray-200"
              />
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full resize-none backdrop-blur-[50px] bg-opacity-20 bg-white dark:bg-opacity-10 dark:bg-black rounded-lg border border-gray-700 dark:border-gray-200"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="self-start rounded-lg hover:text-secondary dark:hover:text-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Sending your message..." : "Send Message →"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
