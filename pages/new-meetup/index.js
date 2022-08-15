import { AddNewMeetup } from "../../Components/AddNewMeetup/AddNewMeetup.component";
import { useRouter } from "next/router";
import Head from "next/head"

function NewMeetupPage() {

  const router = useRouter();
  async function submitHandler(enteredData) {
    
    
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = response.json();
    
    router.push("/");

  }

  return (
    <section>
      <Head>
        <title>Add a New Meetup</title>
        <meta  name="description" content="Add your own meetups and create amazing networking opportunities"/>
      </Head>
      <h2>Add New Meetup</h2>
      <AddNewMeetup onAddNewMeetup={submitHandler} />
    </section>
    
  )
}

export default NewMeetupPage;