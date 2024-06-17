import Image from "next/image";
import Category from "../category/Category";
import { IconType } from "react-icons";
import React from "react";

interface CardProps {
  icon: IconType;
  title: string;
  text: string;
  image: string;
  alt_text: string;
}

interface Cards {
  cards: CardProps[];
}

const ProjectCards: React.FC<Cards> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div className="relative w-[30vw] bg-white m-2">
          <div className="p-4 flex flex-col gap-4">
            <Category><card.icon className="size-8" /></Category>
            <Image src={card.image} width={400} height={200} alt="card" />
            <h2 className="text-black text-3xl font-black uppercase">
              {card.title}
            </h2>
            <p
              className="
            rounded-xl
            p-2
            h-[200px]
            overflow-scroll
            text-black
            text-sm
            text-justify
            scrollbar-thin
            scrollbar-thumb-rounded-full
            scrollbar-track-rounded-full
            scrollbar-corner-rounded-full
            scrollbar-thumb-red-700 
            scrollbar-track-zinc-100
            bg-zinc-100
            shadow-xl
            "
            >
              {card.text}
            </p>
            <button className="bg-red-700 py-2 px-4 rounded-xl self-end border-2 hover:text-red-700 hover:bg-white hover:border-red-700">
              Saiba mais
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
