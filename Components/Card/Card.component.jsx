
import styles from "./Card.styles.module.css";
import { CardStyle } from "../CardStyle/CardStyle.component";
import { useRouter } from "next/router";
import Image from "next/image"

export const Card = ({props: {image, title, description, address, id}}) => {
  const router = useRouter();
  function navigatorHandler() {
    router.push("/" + id);
  }
  return (
    <CardStyle>
      <li className={styles.card}>
        <picture>
          <img alt="meetup" src={image}></img>
        </picture>
        <h3>{title}</h3>
        <p>{description}</p>
        <address>{address}</address>
        <button onClick={navigatorHandler}>See Details</button>
      </li>
    </CardStyle>
  )
} 