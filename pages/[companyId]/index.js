import { Fragment } from "react";
import CompanyDetail from "../../components/companies/CompanyDetail";
import Head from "next/head";
import path from 'path';
import fs from 'fs';
import { MongoClient, ObjectId } from "mongodb";

export default function CompanyDetails(props){
    return(
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description}></meta>
            </Head>
            <CompanyDetail
                image={props.image}
                title={props.title}
                address={props.address}
                description={props.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");

    const db = client.db('companiesdb');
    const companiesCollection = db.collection('companies');

    const companies = await companiesCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return{
            fallback:'blocking',
            paths:companies.map(c =>({ 
                params: {companyId:c.id.toString()},
            })
        )
    };
}

export async function getStaticProps(context) {
    // fetch data for a single company
    const companyId = context.params.companyId;
    // fetch a single company dynamically
    const client = await MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");

    const db = client.db('companiesdb');
    const companiesCollection = db.collection('companies');

    let selectedCompany = null;
    if(ObjectId.isValid(companyId)){
        selectedCompany = await companiesCollection.findOne({ 
        _id: new ObjectId(companyId) 
    });
    }

    client.close();

    if (!selectedCompany) {
        return {
        notFound: true,
        };
    }
   
    const descPath = path.join(process.cwd(), selectedCompany.description);
    const description = fs.readFileSync(descPath, 'utf8');

    return{
        props: {
            id: selectedCompany.id,
            title: selectedCompany.title,
            image: selectedCompany.image,
            address: selectedCompany.address,
            description,
            foundedYear:'1977',
            valuation:'125000',
            founders:'amin darestani',
            headquarters:'qom',
            links:'amindarestani.com',
        }
    };
}