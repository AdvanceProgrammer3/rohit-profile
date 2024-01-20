"use client";

import Link from "next/link";
import { useState } from "react";

const Project = ({ data }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const showMoreProducts = () => {
    // Increase the number of visible products by 8
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-10 px-2 md:px-0">
          {data.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="border p-4 flex flex-col items-center"
            >
              <Link href={`/projects/${product.id}`}>
                <img
                  className="rounded-t-lg h-60 w-72 hover:scale-105 ease-out duration-300"
                  src={product.image}
                  alt=""
                />
              </Link>

              <p>{product.title}</p>

              <p className="line-clamp-3">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="p-2 md:px-0">
          {visibleProducts < data.length && (
            <button
              onClick={showMoreProducts}
              className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
              rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300
               group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                SHOW MORE PROJECT
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
