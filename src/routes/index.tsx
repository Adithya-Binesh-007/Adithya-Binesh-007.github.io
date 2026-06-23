import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adithya Binesh — Full-Stack Developer" },
      { name: "description", content: "Portfolio of Adithya Binesh — CSE student building AI-powered tools like FocusAI and Papryx AI." },
      { property: "og:title", content: "Adithya Binesh — Full-Stack Developer" },
      { property: "og:description", content: "I build AI-powered tools for learning and productivity." },
    ],
  }),
  component: Hero,
});