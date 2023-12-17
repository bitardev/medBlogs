import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="px-2 mt-6">
      <span className="px-10 py-3 mt-4 text-red-600 font-bold text-xl sm:text-sm">
        Popular Categories
      </span>
      <div className="grid grid-cols-7 mt-4 gap-2 px-16 lg:flex lg:justify-evenly lg:flex-wrap lg:px-8 xs:flex">
        {data?.map((item) => (
          <Link
            className={`${styles.category} xs:shrink w-full h-full dark:text-light`}
            key={item._id}
            href={`/category/${item.value}`}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={`${item.label} category`}
                width={300}
                height={300}
                className='w-8 h-8 rounded-full'
              />
            )}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
