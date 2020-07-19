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
                        <h1 class="label border-bottom">Special Education File Audit Form</h1>
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
                                <input class="input" name='studentID' type="number" placeholder="Student ID number" />                                
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label"></div>
                    <div class="field-body">
                        <div class="field is-expanded">
                            <div class="field has-addons">
                                <p class="control">
                                    <a class="button is-static">+44</a>
                                </p>
                                <p class="control is-expanded">
                                    <input class="input" type="tel" placeholder="Your phone number" />
                                </p>
                            </div>
                            <p class="help">Do not enter the first zero</p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Department</label>
                    </div>
                    <div class="field-body">
                        <div class="field is-narrow">
                            <div class="control">
                                <div class="select is-fullwidth">
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

                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Already a member?</label>
                    </div>
                    <div class="field-body">
                        <div class="field is-narrow">
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="member" />Yes</label>
                                <label class="radio">
                                    <input type="radio" name="member" />No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Subject</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
                            </div>
                            <p class="help is-danger">This field is required</p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Question</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfoForm
