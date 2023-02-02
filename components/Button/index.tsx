import Link from "next/link";
import { ReactNode } from "react";
import cl from "classnames";
import styles from "./style.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button className={cl(styles.button, className)} onClick={onClick}>
      <span className={styles.buttonText}>{children}</span>
      <span className={styles.buttonAngleLeft} />
      <span className={styles.buttonAngleRight} />
    </button>
  );
};
