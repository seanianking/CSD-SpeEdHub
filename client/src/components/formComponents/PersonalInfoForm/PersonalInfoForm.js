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
        handleBlur,
        handleSubmit
    } = useForm({
        initialValues, onSubmit: values => console.log({ values })
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="field is-horizontal">
                    <div class="header">
                        <h1 style={{fontSize:'40px'}} class="label border-bottom">Special Education File Audit Form</h1>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Auditor information</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" name='auditorName' type="text" placeholder="Name" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" name='email' type="email" placeholder="youremail@csd.org" />
                            </p>
                        </div>
                        <div class="field is-expanded">
                            <div class="field">
                                <p class="control is-expanded">
                                    <input class="input" name='dateOfAudit' type="date" />
                                </p>
                            </div>
                            <p class='help'>Date of Audit</p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Student information</label>
                    </div>
                    <div class="field-body">
                    <div class="field">
                            <p class="control ">
                                <input class="input" name='teacher' type="text" placeholder="Teacher" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control ">
                                <input class="input" name='student' type="text" placeholder="Student name" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control ">
                                <input class="input" name='studentID' type="text" placeholder="Student ID" />
                            </p>
                        </div>
                        <div class="field is-expanded">
                            <div class="field">
                                <p class="control is-expanded">
                                    <input class="input" name='dateOfBirth' type="date"  />
                                </p>
                            </div>
                            <p class='help'>Date of birth</p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label is-normal">
                    {/* field label left blank to provide spacing for student information section */}
                        <label class="label"></label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name='school'>
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
                        <div class="field ">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name='grade'>
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
                        <div class="field ">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name='race'>
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
                        <div class="field is-expanded">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name='classification'>
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
            </form>
        </div>
    )
}

export default PersonalInfoForm
