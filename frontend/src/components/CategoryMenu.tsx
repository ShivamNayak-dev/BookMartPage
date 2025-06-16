import React from "react";
import "../styles/CategoryMenu.css";

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

export default function CategoryMenu({ categories, onSelectCategory }: Props) {
  return (
    <div className="category-menu">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat} onClick={() => onSelectCategory(cat)}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
