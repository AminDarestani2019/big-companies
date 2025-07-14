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
      </Head>
      <CompanyList companies={props.companies} />
    </Fragment>
  );
  
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");
  const db = client.db('companiesdb');
  const companiesCollection = db.collection('companies');
  const companies = await companiesCollection.find().toArray();
  client.close();
  // const companies = getAllCompanies();

  return {
    props: {
        companies: companies.map((company) => ({
            title: company.title,
            address: company.address,
            image: company.image,
            id: company._id.toString(),
        })),
    },
    revalidate: 1,
  };
}

