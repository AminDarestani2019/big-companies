import { Fragment,useState,useEffect } from "react";
import CompanyDetail from "../../components/companies/CompanyDetail";
import Head from "next/head";
import { MongoClient } from "mongodb";

export default function CompanyDetails(props){
      // حالت محلی برای متن description
  const [descriptionText, setDescriptionText] = useState("");

    useEffect(() => {
    if (props.descriptionPath && typeof props.descriptionPath === "string" && props.descriptionPath !== "") {
        fetch(props.descriptionPath)
        .then(res => res.ok ? res.text() : "Description not found.")
        .then(text => setDescriptionText(text))
        .catch(() => setDescriptionText("Description not available."));
    } else {
        setDescriptionText("Description not available.");
    }
    }, [props.descriptionPath]);


    return(
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={descriptionText}></meta>
            </Head>
            <CompanyDetail
                image={props.image}
                title={props.title}
                address={props.address}
                description={descriptionText}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    try {
        if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            props: { companies: [] }, // داده خالی
        };
        }

        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db('myAppDB');
        const companiesCollection = db.collection('Collection1');
        const companies = await companiesCollection.find({}, { projection: { categoryid: 1 } }).toArray();
        client.close();
        return{
                fallback:'blocking',
                paths:companies.map(c =>({ 
                    params: {companyId:c.categoryid.toString()},
                })
            )
        };
    }
    catch(e){
        return { paths: [], fallback: true };
    }
    
}

export async function getStaticProps(context) {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
        props: { companies: [] }, // داده خالی
    };
    }

    if (!process.env.MONGODB_URI) {
        console.warn("MONGODB_URI is not set, skipping DB fetch during build");
        return { props: { companies: [] } };
    }

    // fetch data for a single company
    const companyId = context.params.companyId;
    // fetch a single company dynamically
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    const db = client.db('myAppDB');
    const companiesCollection = db.collection('Collection1');

    let selectedCompany = await companiesCollection.findOne({ categoryid: companyId });
    
    client.close();

    if (!selectedCompany) {
        return {
        notFound: true,
        };
    }

    const descriptionPath = selectedCompany?.description ? `${selectedCompany.description}` : null;

    return{
        props: {
            categoryid: selectedCompany.categoryid,
            title: selectedCompany.title,
            image: selectedCompany.image,
            address: selectedCompany.address,
            descriptionPath,
            foundedYear:'1977',
            valuation:'125000',
            founders:'amin darestani',
            headquarters:'qom',
            links:'amindarestani.com',
        }
    };
}