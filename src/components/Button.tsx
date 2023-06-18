import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  submitHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button = (props: ButtonProps) => {
  const { children, submitHandler } = props;
  return (
    <button className={styles.button} onClick={submitHandler}>
      {children}
    </button>
  );
};

export default Button;
