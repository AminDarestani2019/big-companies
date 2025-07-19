import CompanyItem from "./CompanyItem";
import classes from './CompanyList.module.css';

export default function CompanyList(props)
{
    return (
        <ul className={classes.list}>
            {props.companies.map((company) =>(
                <CompanyItem
                    key={company.categoryid}
                    id={company.categoryid}
                    image={company.image}
                    title={company.title}
                    address={company.address}
                />
            ))}
        </ul>
    );
}