function FilterBox({className, ...props}) {
  return (
    <fieldset className={`filter-box ${className}`} {...props} />
  )
}

export default FilterBox;