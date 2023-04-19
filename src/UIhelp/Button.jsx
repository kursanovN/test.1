export const Button = (props) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: props.backgroundColor,
      }}>
      {props.children}
    </button>
  );
};
