function Container({ className = "", width = "1130px", style, ...props }) {
  return (
    <div
      className={`container ${className}`}
      style={{ maxWidth: width, ...style }}
      {...props}
    />
  );
}

export default Container;