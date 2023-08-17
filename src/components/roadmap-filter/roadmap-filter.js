import { Link } from "react-router-dom";
import FilterBox from "../filter-box/filter-box";
import "./roadmap-filter.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function RoadmapFilter() {
  const { feedbacksList } = useSelector((state) => state.feedbacks);
  const [statusList, setStatusList] = useState({
    suggestion: 0,
    planned: 0,
    inProgress: 0,
    live: 0,
  });

  useEffect(() => {

    let newObj = {
      suggestion: 0,
      planned: 0,
      inProgress: 0,
      live: 0,
    }

    feedbacksList?.forEach(feedback => {
      if (feedback.status.toLowerCase() === 'suggestion') {
        newObj = {
          ...newObj,
          suggestion: newObj.suggestion + 1,
        }
      } else if (feedback.status.toLowerCase() === 'planned') {
        newObj = {
          ...newObj,
          planned: newObj.planned + 1,
        }
      } else if (feedback.status.toLowerCase() === 'in-progress') {
        newObj = {
          ...newObj,
          inProgress: newObj.inProgress + 1,
        }
      } else if (feedback.status.toLowerCase() === 'live') {
        newObj = {
          ...newObj,
          live: newObj.live + 1,
        }
      }
      setStatusList(newObj);
    });
  }, [feedbacksList])

  return (
    <FilterBox className={"roadmap-filter"}>
      <legend className="visually-hidden">Roadmap Filter</legend>
      <div className="roadmap-filter__heading">
        <h2 className="roadmap-filter__title">Roadmap</h2>
        <Link className="roadmap-filter__link" to="/">View</Link>
      </div>
      <ul className="roadmap-filter__list">
        <li className="roadmap-filter__list-item">Suggestion: <span className="roadmap-filter__list-item--span">{statusList.suggestion}</span></li>
        <li className="roadmap-filter__list-item">Planned: <span className="roadmap-filter__list-item--span">{statusList.planned}</span></li>
        <li className="roadmap-filter__list-item">In-Progress: <span className="roadmap-filter__list-item--span">{statusList.inProgress}</span></li>
        <li className="roadmap-filter__list-item">Live: <span className="roadmap-filter__list-item--span">{statusList.live}</span></li>
      </ul>
    </FilterBox>
  );
}

export default RoadmapFilter;
