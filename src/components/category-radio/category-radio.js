import { useSelector } from "react-redux";
import Category from "../category/category";

import "./category-radio.scss";
import { useState } from "react";

function CategoryRadio({ children, isActive, ...props }) {
  return (
    <label
      className={`category-radio ${isActive ? 'category-radio--active' : ''}`}
    >
      <input
        className="category-radio__input visually-hidden"
        type="radio"
        {...props}
      />
      <Category className={"category-radio__text"} children={children} {...props} />
    </label>
  );
}

export default CategoryRadio;
