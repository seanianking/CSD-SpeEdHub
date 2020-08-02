import React from 'react'
import useForm from '../hooks/useForm'
import form from './formComponents/form.css'

function MasterForm() {

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
        genOneBool: '',
        genOneFind: '',
        genOneFix: '',
        genTwoBool: '',
        genTwoFind: '',
        genTwoFix: '',
        genThreeBool: '',
        genThreeFind: '',
        genThreeFix: '',
        genFourBool: '',
        genFourFind: '',
        genFourFix: '',
        genFiveBool: '',
        genFiveFind: '',
        genFiveFix: '',
        genSixBool: '',
        genSixFind: '',
        genSixFix: '',
        genSevenBool: '',
        genSevenFind: '',
        genSevenFix: '',
        genEightBool: '',
        genEightFind: '',
        genEightFix: '',
        evalType: '',
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit
    } = useForm({
        initialValues, onSubmit: values => console.log({ values })
    });

    return (
        <div   >
            <form id='auditForm' onSubmit={handleSubmit} className="App">
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
                <div className='border-bottom pb-6'>
                    <div className="field is-horizontal">
                        <div className='field'>
                            <div className="header">
                                <h1 style={{ fontSize: '40px' }} className="label border-bottom">1.0 General Information</h1>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the file organized in the new format (1.14)?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genOneBool' value={values.genOneBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genOneFind' value={values.genOneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genOneFix' value={values.genOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Primary Language?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genTwoBool' value={values.genTwoBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genTwoFind' value={values.genTwoFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genTwoFix' value={values.genTwoFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the home language different than the primary language? (2.18) (3.17)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genThreeBool' value={values.genThreeBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genThreeFind' value={values.genThreeFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genThreeFix' value={values.genThreeFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Alternative Language Services Consulted for primary language other than English?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genFourBool' value={values.genFourBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genFourFind' value={values.genFourFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genFourFix' value={values.genFourFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is there a signed Medicaid form (Attached to front of file) (1.1)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genFiveBool' value={values.genFiveBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genFiveFind' value={values.genFiveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genFiveFix' value={values.genFiveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the box giving consent on the Medicaid form checked (1.2)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genSixBool' value={values.genSixBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genSixFind' value={values.genSixFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genSixFix' value={values.genSixFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Initial placement in file? (1.3)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genSevenBool' value={values.genSevenBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genSevenFind' value={values.genSevenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genSevenFix' value={values.genSevenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question'>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the box on the initial placement form checked? (1.4)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='genEightBool' value={values.genEightBool} onChange={handleChange}>
                                            <option>Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='genEightFind' value={values.genEightFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>1.1 FINDING: Missing medicaid form.</option>
                                            <option>1.2 FINDING: Medicaid box is not checked to give consent.</option>
                                            <option>1.3 FINDING: Missing initial placement consent.</option>
                                            <option>1.4 FINDING: The consent box, on the initial placement consent, is not checked.</option>
                                            <option>1.5 FINDING: Missing notice of meeting for eligibility but completed in GoalView.</option>
                                            <option>1.6 FINDING: Missing notice of meeting for current IEP but completed in GoalView. </option>
                                            <option>1.7 FINDING: Missing notice of meeting for previous IEP but completed in GoalView.</option>
                                            <option>1.8 FINDING: Missing progress reports but completed in GoalView.</option>
                                            <option>1.9 FINDING: No progress reports corresponding with current IEP.</option>
                                            <option>1.10 FINDING: Notice of meeting for current eligibility is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.11 FINDING: Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.12 FINDING: Notice of meeting for previous IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.13 FINDING: TRANSITION SERVICES Notice of meeting for current IEP is missing and/or references the wrong date, verbiage, or required attendees.</option>
                                            <option>1.14 FINDING: File not organized in new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='genEightFix' value={values.genEightFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>1.1 CORRECTION: Complete medicaid form.</option>
                                            <option>1.2 CORRECTION: Have parent checkbox, initial, and date as late entry or complete a new form.</option>
                                            <option>1.3 CORRECTION:
                                            • Complete a “replacement” consent for initial placement document and ask parent to sign.
                                            • Write “replacement” at the top of the document.
                                        NOTE: This is the only document that you can complete a “replacement” form. This form is dated the date that the parent actually signs the document.</option>
                                            <option>1.4 CORRECTION: Have parent checkbox, initial, and date as late entry.</option>
                                            <option>1.5 CORRECTION: Print and file.</option>
                                            <option>1.6 CORRECTION: Print and file.</option>
                                            <option>1.7 CORRECTION: Print and file.</option>
                                            <option>1.8 CORRECTION: Print and file.</option>
                                            <option>1.9 CORRECTION: Complete Progress Report and file.
                                        </option>
                                            <option>{`1.10 FIX FORWARD: Ensure there is a notice of meeting for each eligibility that includes
                                        1. the correct meeting date,
                                        2. states "eligibility",
                                        3. invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4. is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.11 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.12 FIX FORWARD: Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP", 
                                        3) invites parent/guardian, LEA, SPED and Gen. Ed. teachers and,
                                        4) is mailed out 5 days in advance.`}
                                            </option>
                                            <option>{`1.13 FIX FORWARD: TRANSITION SERVICES Ensure there is a notice of meeting for each IEP that includes; 
                                        1) the correct meeting date, 
                                        2) states "IEP" and "transition services",
                                        3) invites student, parent/guardian, LEA, SPED and Gen. Ed. teachers and outside agency (if prior written consent was given),
                                        4) is mailed out 5 days in advance.`}</option>
                                            <option>1.14 CORRECTION: Organize file using new format.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Evaluation type'}</p>
                                </div>
                            </div>
                            <div className='field '>
                                <div className='control is-expanded'>
                                    <div className="select is-fullwidth">
                                        <select name='evalType' value={values.evalType} onChange={handleChange}>
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
                </div >
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MasterForm
