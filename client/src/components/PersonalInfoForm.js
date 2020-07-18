import React from 'react'
import useForm from '../hooks/useForm'

function PersonalInfoForm() {

    const initialValues = {
        school: '',
        teacher: '',
        date: '',
        student: '',
        studentID: '',
        dateOfBirth: '',
        grade: 0,
        race: '',
        classification: '',
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">From</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded ">
                                <input className="input" name='school' type="text" placeholder="School" onChange={handleChange} value={values.school} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded  has-icons-right">
                            <input className="input" name='teacher' type="text" placeholder="Teacher" onChange={handleChange} value={values.teacher} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label"></div>
                    <div className="field-body">
                        <div className="field is-expanded">
                            <div className="field has-addons">
                                <p className="control">
                                    <a className="button is-static">+44</a>
                                </p>
                                <p className="control is-expanded">
                                <input className="input" name='student' type="text" placeholder="Student Name" onChange={handleChange} value={values.student} />
                                </p>
                            </div>
                            <p className="help">Do not enter the first zero</p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Department</label>
                    </div>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select>
                                        <option>Business development</option>
                                        <option>Marketing</option>
                                        <option>Sales</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm
