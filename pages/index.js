import CompanyList from "@/components/companies/CompanyList";
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Successful companies based on Acquired podcast</title>
        <meta name='description' content="Browse a huge list of Successful companies based on Acquired podcast"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyList companies={props.companies} />
    </Fragment>
  );
  
}

export async function getStaticProps() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not set, skipping DB fetch during build");
    return { props: { companies: [] } };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('myAppDB');
  const companiesCollection = db.collection('Collection1');
  const companies = await companiesCollection.find().toArray();
  client.close();
  // const companies = getAllCompanies();

  return {
    props: {
        companies: companies.map((company) => ({
            title: company.title,
            address: company.address,
            image: company.image,
            categoryid: company.categoryid.toString(),
        })),
    },
    revalidate: 1,
  };
}

