import {MongoClient, ObjectId }  from "mongodb";
import CardDetail from "../../Components/CardDetail/CardDetail.component";
import { Fragment } from "react";
import Head from "next/head";

export default function seeDetails({meetup}) {

  return (
    <Fragment>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <CardDetail meetup={meetup}></CardDetail>
    </Fragment>
    
  )
  
}

export async function getStaticPaths() {

  const client = await MongoClient.connect("mongodb+srv://asem:qwertyuiop@meetups.28r7lfl.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetupPaths = await meetupCollection.find({},{ _id: 1 }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: meetupPaths.map((meetup) => ({
      params: {meetupId: meetup._id.toString()}
    }))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://asem:qwertyuiop@meetups.28r7lfl.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetupDetail = await meetupCollection.findOne({
    _id: ObjectId(meetupId)
  })

  client.close();
  return {
    props: {
      meetup: {
        id: meetupDetail._id.toString(),
        image: meetupDetail.image,
        title: meetupDetail.title,
        address: meetupDetail.address,
        description: meetupDetail.description,
      }
    }
  }

}


