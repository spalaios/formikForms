import React, {Component} from 'react';

import {Formik} from 'formik';
import Form from './Form';
import * as Yup from 'yup';


class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialValues : {email: ""},
            isValid: false,
            errors: {},
            isDisable: true
        }

        this.signupSchema = Yup.object().shape({
            email: Yup.string()
            .required('Yup email...')
        });
    }

    validate = (values) => {
        // console.log(values); 
        let errors = {};
        // VALIDATION
        if (!values.email) {
        errors.email = "Email is required";
        }
        console.log(values);
        if(!errors.email) {
            this.setState({isValid: true});
            this.setState({isDisable: false});
        }else {
            this.setState({isValid: false});
            this.setState({isDisable: true});
        }
        console.log(this.state);
        return errors;
    }

    formSubmit = (values) => {
        console.log(values);
        console.log('logging form state');
        // this.setState({isValid: true})
        console.log(this.state);
    }

    outsideBtnFunction = () => {
        console.log(this.state);
        if(this.state.isValid) {
            console.log('saving form data to redux');
        }
    }


    render() {
        return (
            <div>
                <div>Title</div>
            <Formik 
                initialValues={this.state.initialValues}
                // validate={this.validate}
                validationSchema={this.signupSchema}
                onSubmit={this.formSubmit}
                render={Form}
                />
                <button type="button" disabled={this.state.isDisable} onClick={this.outsideBtnFunction}>Outside button</button>
            </div>
        );
    }
}

export default UserForm;