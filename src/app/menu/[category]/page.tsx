import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType = await getData(params.category);
  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          className="group flex h-[60vh] w-full flex-col justify-between border-b-2 border-r-2 border-red-500 p-4 odd:bg-fuchsia-50 sm:w-1/2 lg:w-1/3"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="p-2 text-2xl uppercase">{item.title}</h1>
            <h2 className="text-xl group-hover:hidden">${item.price}</h2>
            <button className="hidden rounded-md bg-red-500 p-2 uppercase text-white group-hover:block ">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
