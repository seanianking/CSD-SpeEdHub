import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function GeneralInformation() {

    const initialValues = {
        generalone: '',
        generaltwo: '',
        generalthree: '',
        generalfour: '',
        generalfive: '',
        generalsix: '',
        generalseven: '',
        generaleight: '',
        generaltype: ''
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
                    <div class='field'>
                        <div class="header">
                            <h1 style={{ fontSize: '40px' }} class="label border-bottom">1.0 General Information</h1>
                        </div>
                    </div>
                </div>
                <br />
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field'>
                            <div class='question'>
                                <p style={{fontWeight: 'bold'}}>{'Is the file organized in the new format (1.14)?'}</p>
                            </div>
                        </div>
                        <div class='field'>
                            <div class='control is-expanded'>
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Yes/No</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class='field'>
                            <div class='control is-expanded'>
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Findings</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class='field'>
                            <div class='control is-expanded'>
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Correction</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default GeneralInformation