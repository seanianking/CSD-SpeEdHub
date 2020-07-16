import React, { useState, useEffect, useRef } from 'react'

//custom hook for using a form in react
const useForm = ({ initialValues, onSubmit }) => {
    //state based hooks
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    const [onSubmitting, setOnSubmitting] = useState(false);
    const [onBlur, setOnBlur] = useState(false);

    //useRef and useEffect based hooks
    const formRendered = useRef(true)
    useEffect(() => {
        if (!formRendered.current) {
            setValues(initialValues);
            setErrors({});
            setTouched({});
            setOnSubmitting(false);
            setOnBlur(false);
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

    const handleBlur = e => {
        const { target } = e;
        const { name } = target;
        setTouched({ ...touched, [name]: true });
        setErrors({ ...errors });
    };

    const handleSubmit = e => {
        if (e) event.preventDefault();
        setErrors({ ...errors });
        onSubmit({ values, errors });
    }

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}

export default useForm
