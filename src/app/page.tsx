import React from "react";
import Carousel from "./components/projects/Carousel";
import Image from "next/image";
import ProjectCards from "./components/projects/Cards";
import { FaRulerCombined, FaHouseUser, FaStarHalfAlt } from "react-icons/fa";


const DATA = [
  { image: "/carousel1.png" },
  { image: "/carousel2.png" },
  { image: "/carousel3.png" },
];
const TEXT = [
  {
    icon: FaHouseUser  ,
    title: "title a",
    text: "Os projetos de arquitetura normalmente incluem desde a concepção do projeto até a sua execução, incluindo desenhos técnicos, especificações, orçamentos, entre outros aspectos importantes. É importante destacar que um projeto de arquitetura deve sempre levar em consideração aspectos técnicos, funcionais e estéticos, além de ser adequado às necessidades e expectativas dos clientes.",
    image: "/arqui1.png",
    alt_text: "aa",
  },
  {
    icon: FaRulerCombined,
    title: "title b",
    text: "B",
    image: "/arqui2.png",
    alt_text: "bb",
  },
  {
    icon: FaStarHalfAlt ,
    title: "title c",
    text: "C",
    image: "/cozinha.png",
    alt_text: "cc",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="banner"
        className="items-center  top-0 left-0 w-full h-96 overflow-hidden"
        
      >
        <div className="absolute -z-10 opacity-20 bg-red-700 w-full h-full top-0 left-0"></div>
        <Image className="-z-20" src={"/buildings.png"} fill alt={"banner"} />
      </section>
      <section id="projects"  className="bg-gradient-to-tr from-fuchsia-50 to-red-100">
        <div className="flex">
          <div className=" max-w-[50vw] p-4 flex flex-col justify-around">
            <h2 className="text-red-700 font-black uppercase  text-right">
              Áreas de atuação
            </h2>
            <p className="text-3xl text-black font-black text-right">
              Design de interiores, projetos arquitetônicos e consultoria em
              construção são alguns dos serviços de arquitetura que oferecemos
              para criar ambientes únicos e funcionais.
            </p>
            <button className="bg-red-700 p-4 rounded-2xl uppercase self-end border-white border-[2px] text-xl font-black">
              saiba mais
            </button>
          </div>
          <div className=" max-w-[50vw] p-4">
            <Carousel data={DATA} />
          </div>
        </div>
        <div className="flex justify-around">
          <ProjectCards cards={TEXT} />
        </div>
      </section>
      <section id="">

      </section>
    </>
  );
}
