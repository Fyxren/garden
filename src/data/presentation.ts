type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ben.weerd@gmail.com",
  title: "Fy's Garden 🌱",
  // profile: "/profile.webp",
  description:
    "Greetings, and welcome in my *garden*. I'm Ben // Fyxren, a *hobbyist* from the *Netherlands*. In my garden you'll find a collection of my *projects*, *thoughts* and *ideas*.",
  socials: [
    {
      label: "Fyxren.com",
      link: "https://fyxren.com/"
    },
    {
      label: "Keybase",
      link: "https://keybase.io/fyxren",
    },
    {
      label: "Github",
      link: "https://github.com/Fyxren",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ben-van-der-weerd/",
    }
  ],
};

export default presentation;
