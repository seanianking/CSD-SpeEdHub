import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function PersonalInfoForm() {

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
    } = useForm({
        initialValues, onSubmit: values => console.log({ values })
    });

    return (

        <div className='border-bottom pb-6'>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Auditor information</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" name='auditorName' onChange={handleChange} type="text" placeholder="Name" value={values.auditorName} />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" name='email' onChange={handleChange} type="email" placeholder="youremail@csd.org" value={values.email} />
                        </p>
                    </div>
                    <div className="field is-expanded">
                        <div className="field">
                            <p className="control is-expanded">
                                <input className="input" name='dateOfAudit' onChange={handleChange} type="date" value={values.dateOfAudit} />
                            </p>
                        </div>
                        <p className='help'>Date of Audit</p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Student information</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control ">
                            <input className="input" name='teacher' onChange={handleChange} type="text" placeholder="Teacher" value={values.teacher} />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control ">
                            <input className="input" name='student' onChange={handleChange} type="text" placeholder="Student name" value={values.student} />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control ">
                            <input className="input" name='studentID' onChange={handleChange} type="text" placeholder="Student ID" value={values.studentID} />
                        </p>
                    </div>
                    <div className="field is-expanded">
                        <div className="field">
                            <p className="control is-expanded">
                                <input className="input" name='dateOfBirth' onChange={handleChange} type="date" value={values.dateOfBirth} />
                            </p>
                        </div>
                        <p className='help'>Date of birth</p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    {/* field label left blank to provide spacing for student information section */}
                    <label className="label"></label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name='school' value={values.school} onChange={handleChange}>
                                    <option>School</option>
                                    <option>{'Alta View [E]'}</option>
                                    <option>{'Altara [E]'}</option>
                                    <option>{'BellView [E]'}</option>
                                    <option>{'Bella Vista [E]'}</option>
                                    <option>{'Brookwood [E]'}</option>
                                    <option>{'Butler [E]'}</option>
                                    <option>{'Canyon view [E]'}</option>
                                    <option>{'Copperview [E]'}</option>
                                    <option>{'Crescent [E]'}</option>
                                    <option>{'Draper [E]'}</option>
                                    <option>{'East Midvale [E]'}</option>
                                    <option>{'East Sandy [E]'}</option>
                                    <option>{'Edgemont [E]'}</option>
                                    <option>{'Granite [E]'}</option>
                                    <option>{'Lone Peak [E]'}</option>
                                    <option>{'Midvale [E]'}</option>
                                    <option>{'Midvalley [E]'}</option>
                                    <option>{'Oak Hollow [E]'}</option>
                                    <option>{'Oakdale [E]'}</option>
                                    <option>{'Park Lane [E]'}</option>
                                    <option>{'Peruvian Park [E]'}</option>
                                    <option>{'Quail Hollow [E]'}</option>
                                    <option>{'Ridgecrest [E]'}</option>
                                    <option>{'Sandy [E]'}</option>
                                    <option>{'Silver Mesa [E]'}</option>
                                    <option>{'Sprucewood [E]'}</option>
                                    <option>{'Sunrise [E]'}</option>
                                    <option>{'Willow Canyon [E]'}</option>
                                    <option>{'Willow Springs [E]'}</option>
                                    <option>{'Albion [M]'}</option>
                                    <option>{'Butler [M]'}</option>
                                    <option>{'Draper Park [M]'}</option>
                                    <option>{'Eastmont [M]'}</option>
                                    <option>{'Indian Hills [M]'}</option>
                                    <option>{'Midvale [M]'}</option>
                                    <option>{'Mount Jordan [M]'}</option>
                                    <option>{'Union [M]'}</option>
                                    <option>{'Alta [H]'}</option>
                                    <option>{'Brighton [H]'}</option>
                                    <option>{'Corner Canyon [H]'}</option>
                                    <option>{'Hillcrest [H]'}</option>
                                    <option>{'Diamond Ridge [H]'}</option>
                                    <option>{'Jordan [H]'}</option>
                                    <option>{'Jordan Valley [H]'}</option>
                                    <option>{'South Park [S]'}</option>
                                    <option>{'Transition Academy [S]'}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field ">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name='grade' value={values.grade} onChange={handleChange}>
                                    <option>Grade</option>
                                    <option>Preschool</option>
                                    <option>Kindergarten</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>Post-High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field ">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name='race' value={values.race} onChange={handleChange}>
                                    <option>Race</option>
                                    <option>White</option>
                                    <option>Hispanic</option>
                                    <option>Black</option>
                                    <option>Native American</option>
                                    <option>Asian</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field is-expanded">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name='classification' value={values.classification} onChange={handleChange}>
                                    <option>Classification</option>
                                    <option>Autism</option>
                                    <option>Developmental Delay</option>
                                    <option>Emotional Disturbance</option>
                                    <option>Hearing Impairment/Deafness</option>
                                    <option>Intellectual Disability</option>
                                    <option>Multiple Disabilities</option>
                                    <option>Orthopedic Impairment</option>
                                    <option>Other Health Impairment</option>
                                    <option>Specific Learning Disability</option>
                                    <option>Speech/Language Impairment</option>
                                    <option>Traumatic Brain Injury</option>
                                    <option>{'Visual Impairment (Including Blindness)'}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PersonalInfoForm
