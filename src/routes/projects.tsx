import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "../components/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Adithya Binesh" },
      { name: "description", content: "Projects shipped by Adithya Binesh — FocusAI and Papryx AI." },
      { property: "og:title", content: "Projects — Adithya Binesh" },
      { property: "og:description", content: "Real shipped projects, not concepts." },
    ],
  }),
  component: Projects,
});