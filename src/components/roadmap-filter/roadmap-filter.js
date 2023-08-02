import { Link } from "react-router-dom";
import FilterBox from "../filter-box/filter-box";
import "./roadmap-filter.scss";

function RoadmapFilter() {
  return (
    <FilterBox className={"roadmap-filter"}>
      <legend className="visually-hidden">Roadmap Filter</legend>
      <div className="roadmap-filter__heading">
        <h2 className="roadmap-filter__title">Roadmap</h2>
        <Link className="roadmap-filter__link" to="/">View</Link>
      </div>
      <ul className="roadmap-filter__list">
        <li className="roadmap-filter__list-item">Suggestion: <span className="roadmap-filter__list-item--span">2</span></li>
        <li className="roadmap-filter__list-item">Planned: <span className="roadmap-filter__list-item--span">3</span></li>
        <li className="roadmap-filter__list-item">In-Progress: <span className="roadmap-filter__list-item--span">4</span></li>
        <li className="roadmap-filter__list-item">Live: <span className="roadmap-filter__list-item--span">5</span></li>
      </ul>
    </FilterBox>
  );
}

export default RoadmapFilter;
