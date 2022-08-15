import Link from "next/link";
import styles from "./Navigator.styles.module.css";


export const Navigator = () => {
  return (
    <header className={styles.navigator}>
      <div><Link href="/">Asem</Link></div>
      <nav>
        <ul>
          <li><Link href="/">Home Page</Link></li>
          <li><Link href="/new-meetup">Add Meetup</Link></li>
        </ul> 
      </nav>
    </header>
  )
}