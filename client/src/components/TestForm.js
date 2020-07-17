import React from 'react'
import useForm from '../hooks/useForm'

function TestForm() {

    const initialValues = {
        name: '',
        lastName: '',
        age: 0
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm({ initialValues, onSubmit: values => console.log({ values })
    });

    return (
        <div style={{ border: "3px solid black" }}>
            <form id='auditForm' onSubmit={handleSubmit} className="App">
                <h1>Custom Forms with Hooks</h1>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} value={values.name}/> 
                <br/>
                <label>Last name</label>
                <input type="text" name="lastName" onChange={handleChange} value={values.lastName}/>
                <br/>
                 <label>Age</label> <input type="number" name="age" onChange={handleChange} value={values.age}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TestForm
