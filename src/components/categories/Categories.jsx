import React, { use } from "react";
import { NavLink } from "react-router";
import "./Categories.css";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="mt-4" id="categories">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="my-2 text-center text-accent block p-2 text-sm"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
