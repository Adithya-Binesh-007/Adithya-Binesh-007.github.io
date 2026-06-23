import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../components/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adithya Binesh" },
      { name: "description", content: "Get in touch with Adithya Binesh via email, LinkedIn, or GitHub." },
      { property: "og:title", content: "Contact — Adithya Binesh" },
      { property: "og:description", content: "Let's build something together." },
    ],
  }),
  component: Contact,
});