import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewCompanyForm.module.css';

export default function NewCompanyForm(props)
{
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event)
    {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCategoryid = enteredTitle.toLowerCase().replace(/\s+/g, "-");
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const companyData = {
            categoryid:enteredCategoryid,
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        };

        props.onAddCompany(companyData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Company Title</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Company Image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Company</button>
                </div>
            </form>
        </Card>
    )
}