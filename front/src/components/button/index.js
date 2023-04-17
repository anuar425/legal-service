function Button(props) {
  const { children, buttonClass, ...restProps } = props;
  return (
    <button
      className={`px-4 py-3 bg-yellow-600 text-white transition duration-200 hover:bg-yellow-700 active:bg-yellow-800 ${buttonClass}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
