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
    )
}

export default SecondaryTransitionSection