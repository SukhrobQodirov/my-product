import './category.scss';

function Category({className ='', ...props}) {
  return(
    <span className={`category ${className}`} {...props} />
  ) 
}

export default Category;