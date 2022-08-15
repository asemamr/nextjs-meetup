import styles from "./CardList.styles.module.css";
import { Card } from "../Card/Card.component";

export const CardList = ({ cards }) => {
  return (
    <ul className={styles.cardList}>
      {cards.map((card) => (
        <Card props={card} id={card.id} key={card.id} />
      ))}
    </ul>
  );
};
