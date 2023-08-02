import CategoryRadio from "../category-radio/category-radio";
import FilterBox from "../filter-box/filter-box";

import './category-filter.scss';

function CategoryFilter() {

  

  return(
    <FilterBox className={'category-filter'}>
      <div className="category-filter__inner">
        <legend className="visually-hidden">Categories</legend>

        <CategoryRadio data-id='1' name='category'>All</CategoryRadio>
        <CategoryRadio data-id='2' name='category'>UX</CategoryRadio>
        <CategoryRadio data-id='3' name='category'>UI</CategoryRadio>
        <CategoryRadio data-id='4' name='category'>Enhancement</CategoryRadio>
        <CategoryRadio data-id='5' name='category'>Bug</CategoryRadio>
        <CategoryRadio data-id='6' name='category'>Feature</CategoryRadio>
      </div>  
    </FilterBox>
  )
}

export default CategoryFilter;