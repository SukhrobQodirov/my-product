import DropDown from "../../assets/img/drop-up.svg";
import "./select-sort.scss";

function SelectSort({ className, ...props }) {
  return (
    <div className={`select-sort ${className}`} {...props}>
      <p className="select-sort__by-name">Sort by:</p>
      <button className="select-sort__dropdown">
        <span className="select-sort__text">Most Upvotes</span>
        <img
          src={DropDown}
          alt="Drop Up Icon"
          width="8px"
          height="6px"
          style={{ pointerEvents: "none" }}
        />
      </button>
      <ul className="select-sort__list">
        <li className="select-sort__lis-item">Most Upvotes</li>
        <li className="select-sort__lis-item">Least Upvotes</li>
        <li className="select-sort__lis-item">Most Comments</li>
        <li className="select-sort__lis-item">Least Comments</li>
      </ul>
    </div>
  );
}

export default SelectSort;
