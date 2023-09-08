"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & a;ways hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     3000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/*TEXT CONTAINER */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 font-bold text-red-500">
        <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 px-8 py-4 text-white">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative w-full flex-1 bg-slate-500">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
