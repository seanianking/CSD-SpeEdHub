import React, {useState, useEffect, useRef} from 'react'


const useForm = ({initialValues, onSubmit}) => {
    //custom hook for using a form in react
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    const [onSubmitting, setOnSubmitting] = useState(false);
    const [onBlur, setOnBlur] = useState(false);
}

export default useForm
