import Link from "next/link";
import { ReactNode } from "react";
import cl from "classnames";
import styles from "./style.module.scss";

interface DiamondProps {
  type?: "Gradient" | "white";
}

export const Diamond: React.FC<DiamondProps> = ({ type = "Gradient" }) => {
  return <span className={cl(styles.diamond, styles[`diamond${type}`])} />;
};
