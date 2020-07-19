import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function PersonalInfoForm() {

    const initialValues = {
        auditorName: '',
        email: '',
        school: '',
        teacher: '',
        date: '',
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
                                    <input class="input" name='dateOfAudit' type="date" placeholder="Student Date of Birth" />
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
                            <p class="control is-expanded">
                                <input class="input" name='student' type="text" placeholder="Student name" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" name='studentID' type="text" placeholder="Student ID" />
                            </p>
                        </div>
                        <div class="field is-expanded">
                            <div class="field">
                                <p class="control is-expanded">
                                    <input class="input" name='dateOfBirth' type="date" placeholder="Student Date of Birth" />
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
                                    <select>
                                        <option>School</option>
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
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field ">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select>
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
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field ">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select>
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
                                    <select>
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
