import React from 'react';

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);


const MyForm = ({ handleSubmit, formValues, handleChange }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Email</p>
                <input
                    type="text"
                    name="email" //you can use getKeyByValue to avoid set a name to each input
                    value={formValues.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <p>Password</p>
                <input
                    type="text"
                    name={getKeyByValue(formValues, formValues.password)}
                    value={formValues.password}
                    onChange={handleChange}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm;