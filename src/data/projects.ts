export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Website - Fyxren.com",
    techs: ["SvelteKit", "TailwindCSS", "Skeleton UI"],
    link: "https://github.com/Fyxren/fyxren.com",
  },
  {
    title: "Discord Bot - McData",
    techs: ["JavaScript", "Prisma", "MySQL"],
    link: "https://github.com/McData-Development/McData",
  },
  {
    title: "Website - PianoPapers",
    techs: ["SvelteKit", "TailwindCSS", "Skeleton UI", "Firebase"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
