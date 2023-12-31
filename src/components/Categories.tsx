import { FC } from "react";
import categories from "../data/categories";

type Props = {
  isVisible: boolean;
};

const Categories: FC<Props> = ({ isVisible }) => {
  return (
    <div
      className={` ${
        isVisible
          ? "hidden md:block animate-fade-in"
          : "animate-fade-out hidden"
      } sticky top-20 right-0 left-0 z-20 h-12 bg-[#F8F9FF]`}
    >
      <div className="w-full xl:max-w-7xl xl:mx-auto flex flex-wrap items-center justify-center">
        {categories.map((category) => (
          <span
            key={category}
            className="inline-block px-2 md:px-4 lg:px-8 py-2 text-sm font-semibold text-gray-500 md:text-lg"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
