import { useState } from "react";
import DropUp from "../../assets/img/drop-up-blue.svg";
import DropBottom from "../../assets/img/drop-bottom.svg";
import "./selector.scss";
import { useDispatch, useSelector } from "react-redux";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";

function Selector({ selectParams, className }) {
    const { title, subtitle, currentValue, arr } = selectParams;
    const { currentStatus, currentCategory } = useSelector((state) => state.feedbacks)
    const [isSelectClicked, setSelectClicked] = useState(false);
    const [categoryType, setCategoryType] = useState(currentValue.toLowerCase());
    const dispatch = useDispatch();

    function handleSelectorClicked(evt) {
        const element = evt.target;
        dispatch(feedbacksActions.setCategory(element.textContent.toLowerCase()));
        dispatch(feedbacksActions.setStatus(element.textContent.toLowerCase()));
        setCategoryType(element.textContent.toLowerCase());
        setSelectClicked(!isSelectClicked);
    }

    return (
        <div className={"selector " + className} data-value={categoryType}>
            <span className="selector__title">{title}</span>
            <p className="selector__subtitle">{subtitle}</p>
            <div className="selector__input-inner" onClick={() => setSelectClicked(!isSelectClicked)}>
                {categoryType.length > 2 ? categoryType.charAt(0).toUpperCase() + categoryType.slice(1) : categoryType.toUpperCase()}
                <img
                    className="selector__input-inner--icon"
                    src={isSelectClicked ? DropUp : DropBottom}
                    alt="drop bottom icon"
                    width={"14"}
                    height={"10"}
                />
            </div>
            <ul className={`selector__list selector__list${isSelectClicked ? "--opened" : "--closed"}`} onClick={handleSelectorClicked}>
                {
                    arr.map(category => {
                        return (
                            <li className={`selector__list-item ${categoryType == category.name.toLowerCase() ? 'selector__list-item--active' : ''}`} key={category.id} >{category.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Selector;