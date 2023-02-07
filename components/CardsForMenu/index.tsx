import Image from "next/image";
import { Button } from "../Button";
import styles from "./style.module.scss";

interface CardsForMenuProps {
  src: string;
  description: string;
  onClick: () => void;
}

export const CardsForMenu: React.FC<CardsForMenuProps> = ({
  src,
  description,
  onClick,
}) => {
  return (
    <div className={styles.cardsForMenu}>
      <Button onClick={onClick} className={styles.cardsForMenuButton}>
        More
      </Button>
      <Image
        src={src}
        alt={description}
        className={styles.cardsForMenuImage}
        width="271"
        height="184"
      />
    </div>
  );
};
