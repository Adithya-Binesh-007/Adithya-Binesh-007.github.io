import { createFileRoute } from "@tanstack/react-router";
import { About } from "../components/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adithya Binesh" },
      { name: "description", content: "About Adithya Binesh — CSE student and aspiring full-stack developer." },
      { property: "og:title", content: "About — Adithya Binesh" },
      { property: "og:description", content: "Student. Builder. Learner." },
    ],
  }),
  component: About,
});