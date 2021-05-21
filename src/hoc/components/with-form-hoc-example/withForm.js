import React, { useState } from 'react';




export const withForm = (FORM, initialState = {}) => {
    const ControlledFetch = ({ onSubmit }) => {

        const [formValues, setFormValues] = useState(initialState)

        const handleChange = (e) => {
            const {
                target: { name, value },
            } = e;
            console.log(name, value)
            setFormValues({ ...formValues, [name]: value });
        }

        const handleSubmit = e => {
            e.preventDefault();
            onSubmit(formValues);
        };

        return (
            <FORM
                handleSubmit={handleSubmit}
                formValues={formValues}
                handleChange={handleChange}
            />)
    }

    return ControlledFetch;
}



