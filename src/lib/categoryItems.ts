type iAppProps = {
  name: string;
  title: string;
  image: string;
  description: string;
  id: number;
};

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "visual-arts",
    description: "This Property is a Visual Art.",
    title: "Visual Arts",
    image: "/icons/visualArt.png",
  },
  {
    id: 1,
    name: "music-arts",
    description: "This is a Property is a Music Art.",
    title: "Music Arts",
    image: "/icons/musicArt.png",
  },
  {
    id: 2,
    name: "dance-arts",
    description: "This is a Property is a Dance Art",
    title: "Dance Arts",
    image: "/icons/danceArt.png",
  },
  {
    id: 3,
    name: "theater-arts",
    description: "This Property is a Theater Art",
    title: "Theater Arts",
    image: "/icons/theaterArt.png",
  },
  {
    id: 4,
    name: "other-arts",
    description: "This Property is a Other Art",
    title: "Other Arts",
    image: "/icons/otherArt.png",
  },
];
