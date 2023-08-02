import MainTitle from "../main-title/main-title";
import ProductsFilter from "../products-filter/products-filter";

import './home-filter.scss';

function HomeFilter() {
  return (
    <div className="home-filter">
      <MainTitle/>

      <ProductsFilter/>
    </div>
  )
}

export default HomeFilter;