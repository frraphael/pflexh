"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Carousel = ({data}: {data: {image: string;}[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000); // Altere a duração aqui, se necessário
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full overflow-hidden -z-10">
            <div
                className=" w-3xl flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {data.map((src) => (
                    <Image className="" src={src.image} width={1000} height={1000} alt='Carousels'/>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
