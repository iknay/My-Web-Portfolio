import Taters from "@/assets/images/Taters.png";
import Salina from "@/assets/images/Salina.png";
import GamerPoints from "@/assets/images/GamerPoints.png";
import UVIndex from "@/assets/images/UvIndex.png";
import LiveChat from "@/assets/images/LiveChat.png";
import Lekto from "@/assets/images/Lekto.png";
import TraceIt from "@/assets/images/TraceIt.png";

export const ProjectsCardLang = {
  projects: [
    {
      year: "2024",
      items: [
        {
          image: Salina,
          href: "https://salina.app/",
          label: "Salina",
          description:
            "A cutting-edge platform that utilizes AI to transform content creation. This innovative tool automatically converts videos, podcasts, and webinars into various formats and languages. Salina empowers creators and marketers to effortlessly expand their reach across multiple channels, streamlining the content repurposing process and enhancing overall productivity. I collaborated closely with UI/UX designers and backend developers to create a seamless user experience.",
          technologies: ["React", "Typescript", "TailwindCSS", "Shadcn UI"],
        },
        {
          image: LiveChat,
          href: "",
          github: "https://github.com/iknay/Websocket-LiveChat.git",
          label: "Real Time Chat App",
          description:
            "I developed a real-time chat web application that allows users to join chat rooms and communicate instantly. The app ensures smooth, continuous interaction by providing real-time message updates, making it easy for users to stay connected. I focused on building a user-friendly interface with efficient communication features to create a seamless, engaging experience for all users.",
          technologies: [
            "React",
            "Tailwind CSS",
            "Shadcn UI",
            "Node",
            "Express",
            "Socket.io",
          ],
        },
        {
          image: UVIndex,
          href: "https://uv-index-report.vercel.app/",
          github: "https://github.com/iknay/UV-Index-Report.git",
          label: "UV Index Checker",
          description:
            "I created a simple UV index checker website that allows users to quickly view the current UV index in Manila, Philippines. The app provides easy-to-understand information, helping users stay informed about sun exposure and take appropriate precautions.",
          technologies: ["Node", "Express", "EJS"],
        },
      ],
    },
    {
      year: "Late 2023",
      items: [
        {
          image: GamerPoints,
          href: "https://www.thegamerpoints.com/",
          label: "Gamer Points",
          description:
            "Developed a desktop application for The Gamer Points, an innovative platform that rewards gamers with real-world prizes for playing and achieving in their favorite games. Implemented key features like a smart notification system, referral program, and advanced filtering to enhance user engagement. Worked closely with designers to create an intuitive, visually appealing interface.",
          technologies: ["React", "Typescript", "TailwindCSS", "Electron"],
        },
        // ... other projects for Early 2023
      ],
    },
    {
      year: "2022",
      items: [
        {
          image: Taters,
          href: "https://www.ilovetaters.com/",
          label: "Taters Enterprises Inc.",
          description:
            "Developed key features for I Love Taters' website, focusing on the main site and implementing an admin dashboard for kiosk management. Conducted thorough QA testing to ensure optimal performance of this popular Filipino snack delivery service's web application.",
          technologies: [
            "React",
            "Typescript",
            "TailwindCSS",
            "Material UI",
            "PHP",
            "MySQL",
          ],
        },
      ],
    },
    {
      year: "School Projects",
      items: [
        {
          image: Lekto,
          href: "https://drive.google.com/file/d/1rfyfQRXHwyLD7Z0ip-JWtPcatbOK6qFR/view?usp=sharing",
          label: "Lekto",
          description:
            "I developed Lekto, a mobile app that uses speech recognition to translate non-Tagalog dialects into Tagalog. The app provides users with an easy way to communicate across different dialects, making language barriers less of an issue. It focuses on accuracy and user accessibility, ensuring smooth translations for everyday use.",
          technologies: ["React Native", "Python", "TailwindCSS"],
        },
        {
          image: TraceIt,
          href: "https://drive.google.com/file/d/1uburE-NzI82M2nMaDcpQqhSeGM6aiGmw/view?usp=sharing",
          label: "Trace it",
          description:
            "I developed Trace It, an enhanced contact tracing app that allows users to scan QR codes offline, store location data, and automatically sync with the database once reconnected to the internet. This app provides a seamless, paperless solution, reducing the need for physical forms and minimizing the risk of virus transmission during the pandemic.",
          technologies: ["Android Studio", "Kotlin", "Firebase"],
        },
      ],
    },
  ],
};
