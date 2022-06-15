import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.myButton} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
