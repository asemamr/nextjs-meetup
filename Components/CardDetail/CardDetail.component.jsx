import  styles  from "./CardDetail.module.css";

export default function CardDetail({meetup: {image, title, address, description}}) {


  return (
    <div className={styles.card}>
      <picture>
        <img src={image} alt="" />
      </picture>
      <h2>{title}</h2>
      <p >{description}</p>
      <p className={styles.address}>{address}</p>
    </div>
  )
}