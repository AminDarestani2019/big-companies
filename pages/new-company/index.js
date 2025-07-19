import { useRouter } from "next/router";
import NewCompanyForm from "../../components/companies/NewCompanyForm";
import { Fragment } from "react";
import Head from "next/head";

export default function NewCompanyPage(){
    const route = useRouter();

    async function addCompanyHandler(enteredCompanyData){
        const response = await fetch('/api/new-company',{
            method: 'POST',
            body: JSON.stringify(enteredCompanyData),
            headers:{
                'Content-Type':'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert("error in saving info" + (errorData.message || "unknown"));
            return;
        }
        
        const data = await response.json();
        alert("compnay is successfully added :" + data.toString());
        route.push('/');
    }
    return (
        <Fragment>
            <Head>
                <title>Add a new Meeting</title>
                <meta name='description' content="Add your own companies and create amazing networking opportunity"></meta>
            </Head>
            <NewCompanyForm onAddCompany={addCompanyHandler} />
        </Fragment>
    )
}