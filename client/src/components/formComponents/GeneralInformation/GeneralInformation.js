import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function GeneralInformation() {

    const initialValues = {
        auditorName: '',
        email: '',
        school: '',
        teacher: '',
        student: '',
        studentID: '',
        dateOfBirth: '',
        grade: 0,
        race: '',
        classification: '',
        dateOfAudit: '',
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm({
        initialValues, onSubmit: values => console.log({ values })
    });

    return (
        <div className>
            <form onSubmit={handleSubmit}>
                <div class="field is-horizontal">
                    <div class="header">
                        <h1 style={{fontSize:'40px'}} class="label border-bottom">1.0 General Information</h1>
                    </div>
                </div>
            <div class='columns'>
                <div class='column'>

                </div>
            </div>
                
            </form>
        </div>
    )
}

export default GeneralInformation