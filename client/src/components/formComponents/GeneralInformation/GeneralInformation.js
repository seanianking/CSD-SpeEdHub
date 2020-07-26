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
                        <div class='field question'>
                            <div class=''>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Primary Language?'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Is the home language different than the primary language? (2.18) (3.17)'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Is there a signed Medicaid form (attached to front of file)? (1.1)'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Is the box giving consent on the medicaid form checked? (1.2)'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Initial placement in file? (1.3)'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Is the box on the initial placement form checked? (1.4)'}</p>
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
                <div class="field is-horizontal">
                    <div class='field-body'>
                        <div class='field question'>
                            <div class=''>
                                <p style={{fontWeight: 'bold'}}>{'Evaluation type'}</p>
                            </div>
                        </div>
                        <div class='field'>
                            <div class='control is-expanded'>
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>Select</option>
                                        <option>{'Initial(age 3-17)'}</option>
                                        <option>{'Initial(age 18-21)'}</option>
                                        <option>{'Re-eval(age 3-17)'}</option>
                                        <option>{'Re-eval(age 18-21)'}</option>
                                        <option>{'Re-eval(age 8-21 with guardian)'}</option>
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