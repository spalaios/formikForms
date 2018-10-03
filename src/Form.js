import React from 'react';
import {Form, Field} from 'formik';


const Forma = ({values, errors, touched, handleSubmit, handleBlur, handleChange}) => {
    return (

        <Form onSubmit={handleSubmit}>
            <label>
                {touched.email && errors.email && <p>{errors.email}</p>}
                {/* <p>Email is required</p> */}
                <Field 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
            </label>
            {/* <button type="submit">Submit</button> */}
        </Form>
    )
}

export default Forma;