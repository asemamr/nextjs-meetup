import styles from "./Layout.module.css";
import { Fragment } from "react";
import { Navigator } from "../Navigator/Navigator.component";

export const Layout = (props) => {
  return <Fragment>
    <Navigator></Navigator>
    <div className={styles.pageStyle}>{ props.children }</div>
  </Fragment> 
}