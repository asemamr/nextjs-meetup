
import styles from "./CardStyle.module.css";
export const CardStyle = (props) => {
  return <div className={styles.cardStyle}>{ props.children }</div>
}