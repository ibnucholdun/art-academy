"use client";

import React from "react";
import { Category } from "@prisma/client";
import CategoryItem from "./CategoryItem";

type Props = {
  items: Category[];
};

const iconMap: Record<Category["name"], any> = {
  "Visual Art": "/icons/visualArt.png",
  "Music Art": "/icons/musicArt.png",
  "Dance Art": "/icons/danceArt.png",
  "Theater Art": "/icons/theaterArt.png",
  "Other Art": "/icons/otherArt.png",
};

const Categories: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export default Categories;
