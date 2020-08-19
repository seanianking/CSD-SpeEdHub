import React, { useState, useEffect, useRef } from 'react'
import firebase from '../firebase'

//custom hook for using a form in react
const useForm = ({ initialValues, onSubmit }) => {
    //state based hooks
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    const [newAudit, setNewAudit] = useState({});


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
            setNewAudit({});
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
        const db = firebase.firestore()
        db.collection('audits').add({... values, name: newAudit})
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
