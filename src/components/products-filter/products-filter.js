import CategoryFilter from "../category-filter/category-filter";
import RoadmapFilter from "../roadmap-filter/roadmap-filter";
import './products-filter.scss';

function ProductsFilter() {
  return(
    <form>
      <CategoryFilter/>
      <RoadmapFilter/>
    </form>
  )
}

export default ProductsFilter;