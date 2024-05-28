import { type } from "os";

export default function getBaseURL() {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.DOMAIN_URL}`;
  ("https://localhost:3000");
}
