import React from 'react'
import useForm from '../hooks/useForm'
import form from './formComponents/form.css'

function MasterForm() {

    const initialValues = {
        /////Personal Information Section/////
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
        /////General Information Section/////
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
        /////Eligibility Section/////
        eligOneBool: '',
        eligTwoBool: '',
        eligThreeDetermination: '',
        eligFourBool: '',
        eligFiveBool: '',
        eligSixBool: '',
        eligSevenBool: '',
        eligEightBool: '',
        eligNineBool: '',
        eligTenBool: '',
        eligElevenBool: '',
        eligTwelveBool: '',
        eligThirteenBool: '',
        eligFourteenBool: '',
        eligFifteenBool: '',
        eligSixteenBool: '',
        eligSeventeenBool: '',
        eligEighteenBool: '',
        eligNineteenBool: '',
        eligTwentyBool: '',
        eligTwentyOneBool: '',
        eligTwentyTwoBool: '',
        eligTwentyThreeBool: '',
        eligTwentyFourBool: '',
        eligOneFind: '',
        eligTwoFind: '',
        eligFourFind: '',
        eligFiveFind: '',
        eligSixFind: '',
        eligSevenFind: '',
        eligEightFind: '',
        eligNineFind: '',
        eligTenFind: '',
        eligElevenFind: '',
        eligTwelveFind: '',
        eligThirteenFind: '',
        eligFourteenFind: '',
        eligFifteenFind: '',
        eligSixteenFind: '',
        eligSeventeenFind: '',
        eligEighteenFind: '',
        eligNineteenFind: '',
        eligTwentyFind: '',
        eligTwentyOneFind: '',
        eligTwentyTwoFind: '',
        eligTwentyThreeFind: '',
        eligTwentyFourFind: '',
        eligOneFix: '',
        eligTwoFix: '',
        eligFourFix: '',
        eligFiveFix: '',
        eligSixFix: '',
        eligSevenFix: '',
        eligEightFix: '',
        eligNineFix: '',
        eligTenFix: '',
        eligElevenFix: '',
        eligTwelveFix: '',
        eligThirteenFix: '',
        eligFourteenFix: '',
        eligFifteenFix: '',
        eligSixteenFix: '',
        eligSeventeenFix: '',
        eligEighteenFix: '',
        eligNineteenFix: '',
        eligTwentyFix: '',
        eligTwentyOneFix: '',
        eligTwentyTwoFix: '',
        eligTwentyThreeFix: '',
        eligTwentyFourFix: '',
        dateOfLastEval: '',
        dateOfConsent: '',
        dateOfERS: '',
        dateOfLastObservation: '',
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
                <div className='border-bottom pb-6'>
                    <div className="field is-horizontal">
                        <div className='field'>
                            <div className="header">
                                <h1 style={{ fontSize: '40px' }} className="label border-bottom">2.0 Eligibility</h1>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the Eligibility for this student current? (2.1)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligOneBool' value={values.eligOneBool} onChange={handleChange}>
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
                                        <select name='eligOneFind' value={values.eligOneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligOneFix' value={values.eligOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Date of eligibility determination (2.8)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwoBool' value={values.eligTwoBool} onChange={handleChange}>
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
                                        <select name='eligTwoFind' value={values.eligTwoFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwoFix' value={values.eligTwoFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Eligibility determination'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligThreeDetermination' value={values.eligThreeDetermination} onChange={handleChange}>
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
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the student eligible for special education services?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligFourBool' value={values.eligFourBool} onChange={handleChange}>
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
                                        <select name='eligFourFind' value={values.eligFourFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligFourFix' value={values.eligFourFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was the parent input used to determine eligibility? (2.16)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligFiveBool' value={values.eligFiveBool} onChange={handleChange}>
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
                                        <select name='eligFiveFind' value={values.eligFiveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligFiveFix' value={values.eligFiveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was a data review completed (in file and signed)? (2.9)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligSixBool' value={values.eligSixBool} onChange={handleChange}>
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
                                        <select name='eligSixFind' value={values.eligSixFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligSixFix' value={values.eligSixFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{`Date of data review. (2.7)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                {/* Needs date selector instead of bool or finding */}
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligSevenBool' value={values.eligSevenBool} onChange={handleChange}>
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
                                        <select name='eligSevenFind' value={values.eligSevenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligSevenFix' value={values.eligSevenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was the existing data sufficient?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligEightBool' value={values.eligEightBool} onChange={handleChange}>
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
                                        <select name='eligEightFind' value={values.eligEightFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligEightFix' value={values.eligEightFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'If data is sufficient, what is the date of the last evaluation(s) used to determine eligibility?'}</p>
                                </div>
                            </div>
                            <div className="field">
                                <p className="control is-expanded">
                                    <input className="input" name='dateOfLastEval' onChange={handleChange} type="date" value={values.dateOfLastEval} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was the data review completed prior to consent? (2.10)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTenBool' value={values.eligTenBool} onChange={handleChange}>
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
                                        <select name='eligTenFind' value={values.eligTenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTenFix' value={values.eligTenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is there a completed consent form in the file (signed by parent)?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligElevenBool' value={values.eligElevenBool} onChange={handleChange}>
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
                                        <select name='eligElevenFind' value={values.eligElevenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligElevenFix' value={values.eligElevenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Date of Consent (signature date)'}</p>
                                </div>
                            </div>
                            <div className="field">
                                <p className="control is-expanded">
                                    <input className="input" name='dateOfConsent' onChange={handleChange} type="date" value={values.dateOfConsent} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Were all concerns on the data review consented? (2.3)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwelveBool' value={values.eligTwelveBool} onChange={handleChange}>
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
                                        <select name='eligTwelveFind' value={values.eligTwelveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwelveFix' value={values.eligTwelveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was consent obtained for all areas that were assessed? (2.2)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligThirteenBool' value={values.eligThirteenBool} onChange={handleChange}>
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
                                        <select name='eligThirteenFind' value={values.eligThirteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligThirteenFix' value={values.eligThirteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Were all areas consented tested? (2.5)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligFourteenBool' value={values.eligFourteenBool} onChange={handleChange}>
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
                                        <select name='eligFourteenFind' value={values.eligFourteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligFourteenFix' value={values.eligFourteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was testing completed after consent but prior to eligibility. (2.4)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligFifteenBool' value={values.eligFifteenBool} onChange={handleChange}>
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
                                        <select name='eligFifteenFind' value={values.eligFifteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligFifteenFix' value={values.eligFifteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Was the eligibility completed within 45 days of receiving consent? (2.6)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligSixteenBool' value={values.eligSixteenBool} onChange={handleChange}>
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
                                        <select name='eligSixteenFind' value={values.eligSixteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligSixteenFix' value={values.eligSixteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Does the file contain an ERS? (2.15)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligSeventeenBool' value={values.eligSeventeenBool} onChange={handleChange}>
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
                                        <select name='eligSeventeenFind' value={values.eligSeventeenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligSeventeenFix' value={values.eligSeventeenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'ERS date'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input className="input" name='dateOfERS' onChange={handleChange} type="date" value={values.dateOfERS} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Hearing data on the ERS (2.17)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligEighteenBool' value={values.eligEighteenBool} onChange={handleChange}>
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
                                        <select name='eligEighteenFind' value={values.eligEighteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligEighteenFix' value={values.eligEighteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Vision data on the ERS (2.17)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligNineteenBool' value={values.eligNineteenBool} onChange={handleChange}>
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
                                        <select name='eligNineteenFind' value={values.eligNineteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligNineteenFix' value={values.eligNineteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Medical history on the ERS (2.11) (2.12) (2.19)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwentyBool' value={values.eligTwentyBool} onChange={handleChange}>
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
                                        <select name='eligTwentyFind' value={values.eligTwentyFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwentyFix' value={values.eligTwentyFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Medical history in file (2.11) (2.12) (2.19)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwentyOneBool' value={values.eligTwentyOneBool} onChange={handleChange}>
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
                                        <select name='eligTwentyOneFind' value={values.eligTwentyOneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwentyOneFix' value={values.eligTwentyOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Required observations are documented on the ERS (2.13) (2.14)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwentyTwoBool' value={values.eligTwentyTwoBool} onChange={handleChange}>
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
                                        <select name='eligTwentyTwoFind' value={values.eligTwentyTwoFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwentyTwoFix' value={values.eligTwentyTwoFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Required observations are in the file (2.13) (2.14)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwentyThreeBool' value={values.eligTwentyThreeBool} onChange={handleChange}>
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
                                        <select name='eligTwentyThreeFind' value={values.eligTwentyThreeFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwentyThreeFix' value={values.eligTwentyThreeFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Date of last observation in file'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <p className="control is-expanded">
                                    <input className="input" name='dateOfLastObservation' onChange={handleChange} type="date" value={values.dateOfLastObservation} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Does the file contain a Notice of Meeting for eligibility? (1.5) (1.10)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='eligTwentyFourBool' value={values.eligTwentyFourBool} onChange={handleChange}>
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
                                        <select name='eligTwentyFourFind' value={values.eligTwentyFourFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>2.1 FINDING: Eligibility past due.</option>
                                            <option>2.2 FINDING: Consent was not obtained for all areas assessed.</option>
                                            <option>2.3 FINDING: All concerns on the data review were not consented.</option>
                                            <option>2.4 FINDING: Testing was completed prior to consent.</option>
                                            <option>2.5 FINDING: All areas consented were not tested.</option>
                                            <option>2.6a FINDING: Eligibility testing was was not completed within 45 school days of receiving consent.</option>
                                            <option>2.6b FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined no later than 2 weeks after the 45 day deadline.</option>
                                            <option>2.6c FINDING: Eligibility was not determined within 45 school days of receiving consent; however, all testing was completed within 45 days and eligibility was determined greater than 2 weeks after the 45 day deadline.</option>
                                            <option>2.7 FINDING: Data review document date does not match signature dates.</option>
                                            <option>2.8 FINDING: Discrepancy on the eligibility form between document date and signature date.</option>
                                            <option>2.9 FINDING: Review of existing data missing.</option>
                                            <option>{`2.10 FINDING: Data review is not signed before consent date. Required signatures include: parent/guardian (can be via phone), LEA, SPED teacher and related service providers if applicable.`}</option>
                                            <option>2.11a FINDING: A medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI is in the file however; it is not documented on the ERS.</option>
                                            <option>2.11b FINDING: The file needs a medical and developmental history, from a qualified health or mental health professional, supporting the classification of OHI. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health or mental health professional.</option>
                                            <option>2.11c FINDING: The student's classification is OHI however; the team cannot obtain a medical and developmental history, from a qualified health or mental health professional, supporting this classification. </option>
                                            <option>2.12a FINDING: A medical and developmental history, from a qualified health professional, supporting the classification of AU is in the file however; it is not documented on the ERS.</option>
                                            <option>2.12b FINDING: The file needs a medical and developmental history, from a qualified health professional, supporting the classification of AU. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional.</option>
                                            <option>2.12c FINDING: The student's classification is AU however; the team cannot obtain a medical and developmental history, from a qualified health professional, supporting this classification.</option>
                                            <option>2.13a FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There is NO observation in the file.</option>
                                            <option>2.13b FINDING: One observation corresponding with the current eligibility IS NOT documented on the ERS. There IS an observation in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.13c FINDING: One observation corresponding with the current eligibility IS documented on the ERS. There IS NOT an observation in the file. </option>
                                            <option>2.14a FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There are NO observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14b FINDING: Three observations, corresponding with the classification of ED, ARE NOT documented on the ERS. There ARE three observations in the file. NOTE: Observation documentation must include date and who conducted observations in order to be acceptable.</option>
                                            <option>2.14c FINDING: Three observations, corresponding with the classification of ED, ARE documented on the ERS. There ARE NOT three observations in the file. NOTE: Observation documentation must include date and who conducted observation in order to be acceptable.</option>
                                            <option>2.15 FINDING: No ERS.</option>
                                            <option>2.16a FINDING: Parent did not sign and/or date initial eligibility form.</option>
                                            <option>2.16b FINDING: Parent did not sign and/or date re-evaluation eligibility form and the file is missing the required documentation of parent request to complete via phone.</option>
                                            <option>2.17 FINDING: Hearing and vision data is not documented on the ERS.</option>
                                            <option>2.18 FINDING: No interpreter present at eligibility for alternate home language. Missing documentation of bilingual parent or parent refusal of interpreter.</option>
                                            <option>{`2.19a FINDING: A medical history, from a qualified health professional, supporting the classification of MD is in the file however; it is not documented on the ERS. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b FINDING: The file needs a medical history, from a qualified health professional, supporting the classification of MD. A copy must be maintained in the file and documented on the ERS. It is not in the file or not from a qualified health professional. (A medical history is only required IF specific syndromes, special health problems (e.g., tracheotomy), medication, and long-term medical prognosis are a concern for the individual.) QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19c FINDING: The student's classification is MD however; the team cannot obtain necessary medical history, from a qualified health professional, supporting this classification. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='eligTwentyFourFix' value={values.eligTwentyFourFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>2.1 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.2 CORRECTION:• To correct this error you must review existing data and reconsider eligibility. Submit documentation of assessments conducted to address areas of concern and any new documentation. Make sure that all areas marked for consent are assessed. • If the only thing consented but not tested was hearing and vision, you must still complete a new eligibility. NOTE: The areas of concern noted on the review of existing data (or referral document) have to align with the areas noted in the consent for evaluation and eligibility determination (evaluation summary).`}</option>
                                            <option>2.3 FIX FORWARD: Ensure consent is obtained for all areas of concern on the data review moving forward'.</option>
                                            <option>2.4 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.5 CORRECTION: Start with a review of existing data and complete the eligibility determination process. NOTE: If hearing and vision were consented and not tested, the team must start with a review of existing data and complete the eligibility determination process again.</option>
                                            <option>2.6a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.6b FIX FORWARD: Ensure eligibility is determined within 45 school days of receiving consent moving forward.</option>
                                            <option>2.6c CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. </option>
                                            <option>2.8 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>2.9 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.10 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>{`2.11a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of OHI (including provider information).`}</option>
                                            <option>2.11b CORRECTION: Obtain a completed medical form from qualified health and/or mental health professionals.  Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc. QUALIFIED MENTAL HEALTH PROFESSIONALS: psychologist, school psychologist, counselor, or clinical social worker, etc.</option>
                                            <option>2.11c CORRECTION: The team must reconsider classification and eligibility.</option>
                                            <option>{`2.12a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of AU (including provider information). QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.12b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical and developmental history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS:  physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.12c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
                                            <option>2.13a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.13b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.13c FiX FORWARD: Best practice is to have the observation documented on the ERS and in the file.</option>
                                            <option>2.14a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.14b CORRECTION: Update the ERS with observation information including the observation date and who conducted the observation.</option>
                                            <option>2.14c FIX FORWARD: Best practice is to have the all three observations documented on the ERS and in the file.</option>
                                            <option>2.15 CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16a CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.16b CORRECTION: Start with a review of existing data and complete the eligibility determination process.</option>
                                            <option>2.17 CORRECTION: Update the ERS with hearing and vision data and send copy to parents.</option>
                                            <option>2.18 CORRECTION: Start with a review of existing data and complete the eligibility determination process. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
                                            <option>{`2.19a CORRECTION: Update the ERS with the student's medical and developmental history supporting the classification of MD (including provider information). QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>{`2.19b CORRECTION: Obtain a completed medical form from a qualified health professional. Start with a review of existing data. Update the ERS with the student's medical history supporting the classification (including provider information). Complete the eligibility determination process. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.`}</option>
                                            <option>2.19c CORRECTION: The team must reconsider classification and eligibility. QUALIFIED HEALTH PROFESSIONALS: physician, nurse practitioner, nurse, etc.</option>
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
