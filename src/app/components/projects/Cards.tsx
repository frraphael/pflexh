import Image from "next/image";
import Category from "../category/Category";

const ProjectCards = ({
  cards,
}: {
  cards: {
    icon: string;
    title: string;
    text: string;
    image: string;
    alt_text: string;
  }[];
}) => {
  return (
    <>
      {cards.map((card) => (
        <div className="relative w-[30vw] bg-white m-2">
          <div className="p-4 flex flex-col">
            <Category></Category>
            <Image src={card.image} width={400} height={200} alt="card" />
            <h2 className="text-black text-3xl font-black uppercase">
              {card.title}
            </h2>
            <p className="h-[200px] overflow-hidden text-black">{card.text}</p>
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
