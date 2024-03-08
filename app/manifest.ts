import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyễn Hồng Đức (hongducdev)",
    short_name: "hongducdev.com",
    description:
      "Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at ICTU. I am a Front end developer and am striving to become a Fullstack developer.",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    theme_color: "#1e1e2e",
    background_color: "#a6e3a1",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "webapp",
        url: "https://hongducdev.com/manifest.json",
      },
    ],
    scope: "/",
  };
}
