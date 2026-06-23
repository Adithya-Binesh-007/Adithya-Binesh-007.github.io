import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "../components/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Adithya Binesh" },
      { name: "description", content: "Milestones and Google Search impact for Adithya Binesh's projects." },
      { property: "og:title", content: "Achievements — Adithya Binesh" },
      { property: "og:description", content: "Milestones along the way." },
    ],
  }),
  component: Achievements,
});