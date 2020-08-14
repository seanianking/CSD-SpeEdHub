import React, { useState, useEffect, useRef } from 'react'

//custom hook for using a form in react
const useForm = ({ initialValues, onSubmit }) => {
    //state based hooks
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    const [onSubmitting, setOnSubmitting] = useState(false);


    //function to reset the form
    const resetForm = () => {
        setValues(initialValues)
    }

    //useRef and useEffect based hooks
    const formRendered = useRef(true)
    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
            setErrors({});
            setTouched({});
            setOnSubmitting(false);
        }
        formRendered.current = false;
    }, [initialValues]);

    //event functions
    const handleChange = e => {
        const { target } = e;
        const { name, value } = target;
        e.persist();
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = e => {
        if (e) e.preventDefault();
        setErrors({ ...errors });
        onSubmit({ values, errors });
        resetForm();
    }

    return {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
    };
}

export default useForm
