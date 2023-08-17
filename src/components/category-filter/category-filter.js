import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../../screens/edit-feedback/edit-feedback";
import CategoryRadio from "../category-radio/category-radio";
import FilterBox from "../filter-box/filter-box";

import './category-filter.scss';
import { feedbacksFilterActions } from "../../store/feedbacks-filter/feedbacks-filter.slice";
import { useEffect, useState } from "react";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";

function CategoryFilter() {

  const dispatch = useDispatch();
  const { category } = useSelector(state => state.filterAndSort);
  const { feedbacksList } = useSelector(state => state.feedbacks);
  const [categoryClickedType, setCategoryClickedType] = useState(category ? category : 'all');
  const [feedbacks, setFeedbacks] = useState(feedbacksList ? feedbacksList : null);

  useEffect(() => {
    if (!feedbacksList) {
      dispatch(feedbacksActions.setLoading())
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          dispatch(feedbacksActions.setFeedbacksList(data.productRequests));
        })
        .catch(err => {
          dispatch(feedbacksActions.setError(err))
        })
    }
  }, []);

  const categoriesArr = [
    {
      id: 0,
      name: 'All'
    },
    ...Categories,
  ]

  function handleFilterClicked(evt) {
    const element = evt.target;
    const elementId = element.dataset.id;

    categoriesArr.forEach(categoryObj => {
      const filterValue = categoryObj.name.toLowerCase();
      if (filterValue == 'all') {
        dispatch(feedbacksFilterActions.setCategory(filterValue));
        setCategoryClickedType(filterValue);
        dispatch(feedbacksActions.setFeedbacksList(feedbacks));  
      } else if (+categoryObj.id === +elementId) {
        dispatch(feedbacksFilterActions.setCategory(filterValue));
        setCategoryClickedType(filterValue);
        dispatch(feedbacksActions.setFeedbacksList(feedbacks.filter(obj => filterValue == obj.category)));
      }
    })
  }

  return (
    <FilterBox className={'category-filter'}>
      <div className="category-filter__inner">
        <legend className="visually-hidden">Categories</legend>
        {categoriesArr.map(category => {
          return (
            <CategoryRadio key={category.id} data-id={category.id} name='category' isActive={category.name.toLowerCase() == categoryClickedType} onClick={handleFilterClicked}>{category.name}</CategoryRadio>
          )
        })}
      </div>
    </FilterBox>
  )
}

export default CategoryFilter;