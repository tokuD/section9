import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  submitHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button = (props: ButtonProps) => {
  const { children, submitHandler, className } = props;
  return (
    <button className={`${styles.button} ${className}`} onClick={submitHandler}>
      {children}
    </button>
  );
};

export default Button;
