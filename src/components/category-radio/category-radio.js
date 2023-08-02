import Category from "../category/category";

import "./category-radio.scss";

function CategoryRadio({ children, ...props }) {
  return (
    <label
      className='category-radio' 
    >
      <input
        className="category-radio__input visually-hidden"
        type="radio"
        {...props}
      />
      <Category className={"category-radio__text"} children={children} />
    </label>
  );
}

export default CategoryRadio;
