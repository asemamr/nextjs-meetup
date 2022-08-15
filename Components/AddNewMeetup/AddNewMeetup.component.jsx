import styles from "./AddNewMeetup.module.css";
import { CardStyle } from "../CardStyle/CardStyle.component";
import { useRef } from "react";


export function AddNewMeetup(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  
  function submitHandler(e) {
    e.preventDefault();
    let serverData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value
    }
    // fetch("https://meetup-7a30e-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(serverData)
    //   }
    // ).then(() => {
    //   navigate("/", {replace: true})
    // })
    props.onAddNewMeetup(serverData);
  }
  return (
    <CardStyle>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.title}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className={styles.image}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageRef} />
        </div>
        <div className={styles.address}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} />
        </div>
        <div className={styles.description}>
          <label htmlFor="description">Description</label>
          <textarea name="" id="description" cols="30" rows="10" ref={descriptionRef}></textarea>
        </div>
        <div className={styles.button}>
          <button>Add Meetup</button>
        </div>
      </form>
    </CardStyle>
    
  )
}