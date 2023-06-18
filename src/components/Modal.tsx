import Button from "./Button";
import styles from "./Modal.module.css";

type MoalProps = {
  message: string;
  closeHander: () => void;
};

const Modal = (props: MoalProps) => {
  const { message, closeHander } = props;
  return (
    <div className={styles.container} onClick={closeHander}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className={styles["modal-title"]}>Invalid Input</h2>
        <div className={styles["modal-body"]}>
          <p>{message}</p>
          <Button
            className={styles["modal-button"]}
            submitHandler={closeHander}
          >
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
