import { CardList } from "../Components/CardList/CardList.component";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head"

function HomePage(props) {
  const meetups = props.meetups
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta  name="description" content="Browse a huge list of highly active React meetups"/>
      </Head>
      <CardList cards={meetups} />
    </Fragment>
  )
}

export default HomePage;
export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://asem:qwertyuiop@meetups.28r7lfl.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  let meetups = await meetupCollection.find().toArray();

  client.close();
  meetups = meetups.map((meetup) => ({
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
    id: meetup._id.toString()
  }))

  return {
    props: {
      meetups: meetups
    }, 
    revalidate: 1
  }
}