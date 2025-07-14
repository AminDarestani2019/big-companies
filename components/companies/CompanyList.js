import CompanyItem from "./CompanyItem";
import classes from './CompanyList.module.css';

export default function CompanyList(props)
{
    return (
        <ul className={classes.list}>
            {props.companies.map((company) =>(
                <CompanyItem
                    key={company.id}
                    id={company.id}
                    image={company.image}
                    title={company.title}
                    address={company.address}
                />
            ))}
        </ul>
    );
}