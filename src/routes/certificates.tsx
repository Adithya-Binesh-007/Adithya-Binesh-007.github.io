import { createFileRoute } from "@tanstack/react-router";
import { Certificates } from "../components/portfolio";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Adithya Binesh" },
      { name: "description", content: "Certifications earned by Adithya Binesh from courses, workshops, and programs." },
      { property: "og:title", content: "Certificates — Adithya Binesh" },
      { property: "og:description", content: "Learning, recognized." },
    ],
  }),
  component: Certificates,
});