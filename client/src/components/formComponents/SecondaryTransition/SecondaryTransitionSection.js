import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function SecondaryTransitionSection() {

    const initialValues = {
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
                                <select name='IsESYNeeded' value={values.IsESYNeeded} onChange={handleChange}>
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
                                <select name='ESYDecision' value={values.ESYDecision} onChange={handleChange}>
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
    )
}

export default SecondaryTransitionSection