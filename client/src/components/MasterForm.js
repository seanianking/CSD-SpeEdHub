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
        /////IEP Section/////
        IEPOneBool: '',
        IEPTwoBool: '',
        IEPThreeBool: '',
        IEPFourBool: '',
        IEPFiveBool: '',
        IEPSixBool: '',
        IEPSevenBool: '',
        IEPEightBool: '',
        IEPNineBool: '',
        IEPTenBool: '',
        IEPElevenBool: '',
        IEPTwelveBool: '',
        IEPThirteenBool: '',
        IEPFourteenBool: '',
        IEPFifteenBool: '',
        IEPSixteenBool: '',
        IEPSeventeenBool: '',
        IEPOneFind: '',
        IEPTwoFind: '',
        IEPThreeFind: '',
        IEPFourFind: '',
        IEPFiveFind: '',
        IEPSixFind: '',
        IEPSevenFind: '',
        IEPEightFind: '',
        IEPNineFind: '',
        IEPTenFind: '',
        IEPElevenFind: '',
        IEPTwelveFind: '',
        IEPThirteenFind: '',
        IEPFourteenFind: '',
        IEPFifteenFind: '',
        IEPSixteenFind: '',
        IEPSeventeenFind: '',
        IEPOneFix: '',
        IEPTwoFix: '',
        IEPThreeFix: '',
        IEPFourFix: '',
        IEPFiveFix: '',
        IEPSixFix: '',
        IEPSevenFix: '',
        IEPEightFix: '',
        IEPNineFix: '',
        IEPTenFix: '',
        IEPElevenFix: '',
        IEPTwelveFix: '',
        IEPThirteenFix: '',
        IEPFourteenFix: '',
        IEPFifteenFix: '',
        IEPSixteenFix: '',
        IEPSeventeenFix: '',
        dateOfCurrentIEP: '',
        dateOfPreviousIEP: '',
        ESYDecision: '',
        /////Transition Section/////
        STROneBool: '',
        STRTwoBool: '',
        STRThreeBool: '',
        STRFourBool: '',
        STRFiveBool: '',
        STRSixBool: '',
        STRSevenBool: '',
        STREightBool: '',
        STRNineBool: '',
        STRTenBool: '',
        STRElevenBool: '',
        STROneFind: '',
        STRTwoFind: '',
        STRThreeFind: '',
        STRFourFind: '',
        STRFiveFind: '',
        STRSixFind: '',
        STRSevenFind: '',
        STREightFind: '',
        STRNineFind: '',
        STRTenFind: '',
        STRElevenFind: '',
        STROneFix: '',
        STRTwoFix: '',
        STRThreeFix: '',
        STRFourFix: '',
        STRFiveFix: '',
        STRSixFix: '',
        STRSevenFix: '',
        STREightFix: '',
        STRNineFix: '',
        STRTenFix: '',
        STRElevenFix: '',
        transitionDate: '',

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
                            <div className="field">
                                <div className="control is-expanded">
                                    <div className="select ">
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
                <div className='border-bottom pb-6'>
                    <div className="field is-horizontal">
                        <div className='field'>
                            <div className="header">
                                <h1 style={{ fontSize: '40px' }} className="label border-bottom">3.0 IEP</h1>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Is the IEP current? (3.1)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPOneBool' value={values.IEPOneBool} onChange={handleChange}>
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
                                        <select name='IEPOneFind' value={values.IEPOneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Date of current IEP (3.7)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input className="input" name='dateOfCurrentIEP' onChange={handleChange} type="date" value={values.dateOfCurrentIEP} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Date of Previous IEP (3.7)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input className="input" name='dateOfPreviousIEP' onChange={handleChange} type="date" value={values.dateOfPreviousIEP} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{'Does the file contain a Notice of Meeting for current IEP? (1.6) (1.11) (1.13)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPTwoBool' value={values.IEPTwoBool} onChange={handleChange}>
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
                                        <select name='IEPTwoFind' value={values.IEPTwoFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPTwoFix' value={values.IEPTwoFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the file contain a Notice of Meeting for previous IEP? (1.7)(1.12)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPThreeBool' value={values.IEPThreeBool} onChange={handleChange}>
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
                                        <select name='IEPThreeFind' value={values.IEPThreeFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPThreeFix' value={values.IEPThreeFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Parent participated in meeting (3.11)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPFourBool' value={values.IEPFourBool} onChange={handleChange}>
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
                                        <select name='IEPFourFind' value={values.IEPFourFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFourFix' value={values.IEPFourFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'LEA representative participated in meeting (3.8) (3.9)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPFiveBool' value={values.IEPFiveBool} onChange={handleChange}>
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
                                        <select name='IEPFiveFind' value={values.IEPFiveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFiveFix' value={values.IEPFiveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Special education teacher participated in meeting (3.8) (3.9)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPSixBool' value={values.IEPSixBool} onChange={handleChange}>
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
                                        <select name='IEPSixFind' value={values.IEPSixFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPSixFix' value={values.IEPSixFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'General education teacher participated in meeting (3.8) (3.9)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPSevenBool' value={values.IEPSevenBool} onChange={handleChange}>
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
                                        <select name='IEPSevenFind' value={values.IEPSevenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPSevenFix' value={values.IEPSevenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'IWas the PLAAFP written to include baseline or current data? (3.6)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPEightBool' value={values.IEPEightBool} onChange={handleChange}>
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
                                        <select name='IEPEightFind' value={values.IEPEightFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPEightFix' value={values.IEPEightFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the PLAAFP include how the disability affects the involvement/progress with general curriculum? (3.2)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPNineBool' value={values.IEPNineBool} onChange={handleChange}>
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
                                        <select name='IEPNineFind' value={values.IEPNineFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPNineFix' value={values.IEPNineFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the IEP state the amount of time and frequency for related services?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPTenBool' value={values.IEPTenBool} onChange={handleChange}>
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
                                        <select name='IEPTenFind' value={values.IEPTenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPTenFix' value={values.IEPTenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the IEP state the frequency of modifications/services/supports in the general classroom?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPElevenBool' value={values.IEPElevenBool} onChange={handleChange}>
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
                                        <select name='IEPElevenFind' value={values.IEPElevenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPElevenFix' value={values.IEPElevenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Do the IEP goals address areas of educational need? (3.3) (3.4) (3.5)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPTwelveBool' value={values.IEPTwelveBool} onChange={handleChange}>
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
                                        <select name='IEPTwelveFind' value={values.IEPTwelveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPTwelveFix' value={values.IEPTwelveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Do the goals state the skill, condition, and criterion? (what the student will do, when and how, acceptable level of performance) (3.16)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPThirteenBool' value={values.IEPThirteenBool} onChange={handleChange}>
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
                                        <select name='IEPThirteenFind' value={values.IEPThirteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPThirteenFix' value={values.IEPThirteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the IEP contain a description of how student progress will be monitored?'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPFourteenBool' value={values.IEPFourteenBool} onChange={handleChange}>
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
                                        <select name='IEPFourteenFind' value={values.IEPFourteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFourteenFix' value={values.IEPFourteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Does the student's IEP indicate if ESY services are needed? (3.10) (3.14)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IsESYDecision' value={values.IsESYDecision} onChange={handleChange}>
                                            <option>Select</option>
                                            <option>Yes student requires ESY.</option>
                                            <option>ESY services are NOT required.</option>
                                            <option>ESY decision to be documented with further data documentation.</option>
                                            <option>Item not marked.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Progress reports documenting progress from the current IEP (1.8,1.9)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPFifteenBool' value={values.IEPFifteenBool} onChange={handleChange}>
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
                                        <select name='IEPFifteenFind' value={values.IEPFifteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFifteenFix' value={values.IEPFifteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Are signed meeting notes for the IEP included in fie? (3.15)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPSixteenBool' value={values.IEPSixteenBool} onChange={handleChange}>
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
                                        <select name='IEPSixteenFind' value={values.IEPSixteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPSixteenFix' value={values.IEPSixteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Does the file have a current SCRAM? (3.12)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPSeventeenBool' value={values.IEPSeventeenBool} onChange={handleChange}>
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
                                        <select name='IEPSeventeenFind' value={values.IEPSeventeenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPSeventeenFix' value={values.IEPSeventeenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{'Do the SCRAM and IEP minutes match? (3.13)'}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='IEPEighteenBool' value={values.IEPEighteenBool} onChange={handleChange}>
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
                                        <select name='IEPEighteenFind' value={values.IEPEighteenFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>3.1 FINDING: IEP is past due.</option>
                                            <option>3.2 FINDING: PLAAFP's do not include how the disability affects the student's involvement/progress with the "general curriculum".</option>
                                            <option>3.3 FINDING: PLAAFP's without corresponding goals and/or minutes.</option>
                                            <option>3.4 FINDING: Goals without corresponding PLAAFPs and/or minutes.</option>
                                            <option>3.5 FINDING: Minutes without corresponding PLAAFPs and/or goals.</option>
                                            <option>3.6 FINDING: PLAAFP does not include baseline or current data.</option>
                                            <option>3.7 FINDING: Discrepancy on the IEP form between document date and signature date.</option>
                                            <option>3.8 FINDING: Required participants were not present at the IEP meeting and were not excused.</option>
                                            <option>3.9 FINDING: Written input for required participant not attached to meeting excusal form.</option>
                                            <option>3.10 FINDING: ESY services are not specified.</option>
                                            <option>3.11a FINDING: Parent attended IEP via phone but the file is missing required documentation.</option>
                                            <option>3.11b FINDING: Parent attended the IEP meeting, as per signed IEP meeting notes, but did not sign the IEP document.</option>
                                            <option>3.11c FINDING: Parent no showed. Missing 3 notice of meetings.</option>
                                            <option>3.12 FINDING: The file needs a current SCRAM.</option>
                                            <option>3.13 FINDING: SCRAM and IEP minutes do not match.</option>
                                            <option>3.14 FINDING: ESY box not checked on SCRAM.</option>
                                            <option>3.15 FINDING: The file is missing signed meeting notes corresponding with current IEP.</option>
                                            <option>3.16 FINDING: IEP goals do not state the skill, condition, and/or criterion.</option>
                                            <option>3.17 FINDING: No interpreter present at IEP for alternate home language. Missing documentation in meeting notes of bilingual parent or parent refusal of interpreter.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPEighteenFix' value={values.IEPEighteenFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>3.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`3.2 CORRECTION: Add "general curriculum" verbiage to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.3 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.4 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.5 CORRECTION: Update IEP to ensure PLAAFP's, goals and minutes correspond. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`3.6 CORRECTION: Add current data (metrics) to the PLAAFP's. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.7 CORRECTION: Draw line through the incorrect date. Make sure that the inaccurate information is still legible. Hand correct the date. Initial and date the entry. State the reason for the error in the margin if known.</option>
                                            <option>3.8 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.9 CORRECTION: Find written input for corresponding meeting excusal OR Hold a new IEP meeting.</option>
                                            <option>3.10 FIX FORWARD: ESY must be determined in current academic school year. Once determined,.ESY classification must be documented in an IEP amendment.</option>
                                            <option>3.11a CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.11b CORRECTION: On the IEP signature page, include a notation with the circumstances, initial and date notation and attach signed meeting notes.</option>
                                            <option>3.11c CORRECTION: Hold a new IEP meeting.</option>
                                            <option>3.12 CORRECTION: Complete SCRAM and file.</option>
                                            <option>3.13 CORRECTION: Reconcile minutes and correct SCRAM.</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>3.17 CORRECTION: Hold a new IEP meeting. Ensure ALS is contacted and an interpreter is present at the meeting.</option>
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
                                <h1 style={{ fontSize: '40px' }} className="label border-bottom">{`4.0 Secondary Transition Requirements (14yrs. and older)`}</h1>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-horizontal">
                        <div className='field-body'>
                            <div className='field question '>
                                <div className=''>
                                    <p style={{ fontWeight: 'bold' }}>{`PLAAFP statement addresses transitions strengths and needs. (4.1) (4.6)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Student's measurable long-range post school goals are based on student's preferences and interests? (4.2)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STRTwoBool' value={values.STRTwoBool} onChange={handleChange}>
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
                                        <select name='STRTwoFind' value={values.STRTwoFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPTwoFix' value={values.IEPTwoFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`The goal meets the following Transition area(s): (E) Education, (EMP) Employment, (IL) Independent Living. (Check mark indicates goal meets criteria.). (4.2)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STRThreeBool' value={values.STRThreeBool} onChange={handleChange}>
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
                                        <select name='STRThreeFind' value={values.STRThreeFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPThreeFix' value={values.IEPThreeFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Do transition services include courses of study that align with the student's post secondary goals? (4.8)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STRFourBool' value={values.STRFourBool} onChange={handleChange}>
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
                                        <select name='STRFourFind' value={values.STRFourFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFourFix' value={values.IEPFourFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Is there an annual goal on the IEP that is related to the student's transition service needs? (4.7)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STRFiveBool' value={values.STRFiveBool} onChange={handleChange}>
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
                                        <select name='STRFiveFind' value={values.STRFiveFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPFiveFix' value={values.IEPFiveFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Was the student invited to the IEP meeting? (1.13)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Was an outside agency invited to participate in the IEP? (1.13)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`If an outside agency was invited to the IEP, did parent sign consent for outside agency participation prior to Notice of Meeting? (1.13) (4.10)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Was an age appropriate transition assessment conducted (4.4)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Date transition assessment was conducted `}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Summary of performance in file? (4.5)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
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
                                    <p style={{ fontWeight: 'bold' }}>{`Age of majority in file? (4.3)`}</p>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control '>
                                    <div className="select ">
                                        <select name='STROneBool' value={values.STROneBool} onChange={handleChange}>
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
                                        <select name='STROneFind' value={values.STROneFind} onChange={handleChange}>
                                            <option>Findings</option>
                                            <option>4.1 FINDING: Transition plan is missing.</option>
                                            <option>{`4.2 FINDING: Student's measurable long-range post school goals (education, employment, independent living) do not meet criteria.`}</option>
                                            <option>4.3a FINDING: The student is older than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.3b FINDING: The student is younger than 16 1/2 and the age of majority is missing/incomplete. </option>
                                            <option>4.4 FINDING: Missing/incomplete age appropriate transition assessment. NOTE: Transition assessment must include the date and student's name in order to be acceptable.</option>
                                            <option>4.5 FINDING: Missing/incomplete progress to graduation card.</option>
                                            <option>4.6 FINDING: Missing/insufficient transition PLAAFP.</option>
                                            <option>4.7 FINDING: Missing/insufficient annual transition goal.</option>
                                            <option>4.8 FINDING: Missing/insufficient courses of study that align with the student's postsecondary goals.</option>
                                            <option>{`4.9 FINDING: Missing/insufficient transition services and activities (education, employment, independent living).`}</option>
                                            <option>4.10 FINDING: Missing/incomplete outside agency consent.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <div className="select is-fullwidth">
                                        <select name='IEPOneFix' value={values.IEPOneFix} onChange={handleChange}>
                                            <option>Correction/Fix Forward</option>
                                            <option>4.1 CORRECTION: Hold a new IEP meeting.</option>
                                            <option>{`4.2 CORRECTION: Update long-range post school goals based on student's preferences and interests.  Hold a new IEP meeting and make the correction(s) in the new IEP OR  Make the correction(s) through the IEP amendment process.All post secondary goals formula:_____________________,    __________ will (After high school)                 (student) (After graduation)(After completion of post-high)_____________________      _____________.(observable behavior) (where and how)`}</option>
                                            <option>4.3a CORRECTION: Complete age of majority.</option>
                                            <option>4.3b FIX FORWARD: Complete age of majority at next annual meeting. </option>
                                            <option>4.4 CORRECTION: Complete age appropriate transition assessment.</option>
                                            <option>4.5 CORRECTION: Complete progress to graduation and file.</option>
                                            <option>{`4.6 CORRECTION: Update IEP to include transition PLAAFP that addresses students strengths and needs. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.7 CORRECTION: Update IEP to include annual transition goal. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.8 CORRECTION: Update transition plan to include multi-year plan that contains courses of study that align with the student's postsecondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>{`4.9 CORRECTION: Update transition services and activities that occur during the current IEP year that will help student "develop, refine, and/or work toward achieving" post-secondary goals. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.`}</option>
                                            <option>3.14 CORRECTION: Check the "student qualifies for extended school year" box on SCRAM.</option>
                                            <option>3.15 FIX FORWARD: There should be signed meeting notes corresponding with every parent meeting. Meeting notes should be uploaded to GoalView after the meeting takes place.</option>
                                            <option>3.16 CORRECTION: Update goal's to include skill, condition and/or criterion. Hold a new IEP meeting and make the correction(s) in the new IEP OR Make the correction(s) through the IEP amendment process.</option>
                                            <option>4.10 FIX FORWARD: If applicable, ensure outside agency consent is completed prior to sending out notice of meeting.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MasterForm
