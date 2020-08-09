import React from 'react'
import useForm from '../../../hooks/useForm'
import '../form.css'

function EligibilitySection() {

    const initialValues = {
        eligOneBool: '',
        eligTwoBool: '',
        eligThreeBool: '',
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
        eligTwentyFiveBool: '',
        eligTwentySixBool: '',
        eligTwentySevenBool: '',
        eligOneFind: '',
        eligTwoFind: '',
        eligThreeFind: '',
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
        eligTwentyFiveFind: '',
        eligTwentySixFind: '',
        eligTwentySevenFind: '',
        eligOneFix: '',
        eligTwoFix: '',
        eligThreeFix: '',
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
        eligTwentyFiveFix: '',
        eligTwentySixFix: '',
        eligTwentySevenFix: '',

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
                        <h1 style={{ fontSize: '40px' }} className="label border-bottom">2.0 Eligibility</h1>
                    </div>
                </div>
            </div>
            <br />
            <div className="field is-horizontal">
                <div className='field-body'>
                    <div className='field question'>
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
                    <div className='field question'>
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
                            <p style={{ fontWeight: 'bold' }}>{'Eligibility determination'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control '>
                            <div className="select ">
                                <select name='eligThreeBool' value={values.eligThreeBool} onChange={handleChange}>
                                    <option>Yes/No</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        {/* Different selection, no section for correction */}
                        <div className='control is-expanded'>
                            <div className="select is-fullwidth">
                                <select name='eligThreeFind' value={values.eligThreeFind} onChange={handleChange}>
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
                                <select name='eligThreeFix' value={values.eligThreeFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'If data is sufficient, what is the date of the last evaluation(s) used to determine eligibility?'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        {/* Use date picker */}
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
                            <p style={{ fontWeight: 'bold' }}>{'Was the data review completed prior to consent? (2.10)'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control '>
                            <div className="select ">
                                <select name='eligEightBool' value={values.eligTenBool} onChange={handleChange}>
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
                                <select name='eligEightFind' value={values.eligTenFind} onChange={handleChange}>
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
                                <select name='eligEightFix' value={values.eligTenFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Is there a completed consent form in the file (signed by parent)?'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control '>
                            <div className="select ">
                                <select name='eligEightBool' value={values.eligElevenBool} onChange={handleChange}>
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
                                <select name='eligEightFind' value={values.eligElevenFind} onChange={handleChange}>
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
                                <select name='eligEightFix' value={values.eligElevenFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Date of Consent (signature date)'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        {/* Use date picker */}
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
                                    <option>Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <div className="select is-fullwidth">
                                <select name='eligEightFix' value={values.eligEightFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Were all concerns on the data review consented? (2.3)'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control '>
                            <div className="select ">
                                <select name='eligEightBool' value={values.eligThirteenBool} onChange={handleChange}>
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
                                <select name='eligEightFind' value={values.eligThirteenFind} onChange={handleChange}>
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
                                <select name='eligEightFix' value={values.eligThirteenFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Was consent obtained for all areas that were assessed? (2.2)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Were all areas consented tested? (2.5)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Was testing completed after consent but prior to eligibility. (2.4)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Was the eligibility completed within 45 days of receiving consent? (2.6)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Does the file contain an ERS? (2.15)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'ERS date'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        {/* Use date picker */}
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
                                    <option>Date</option>                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <div className="select is-fullwidth">
                                <select name='eligEightFix' value={values.eligEightFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Hearing data on the ERS (2.17)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Vision data on the ERS (2.17)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Medical history on the ERS (2.11) (2.12) (2.19)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Medical history in file (2.11) (2.12) (2.19)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Required observations are documented on the ERS (2.13) (2.14)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Required observations are in the file (2.13) (2.14)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Date of last observation in file'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        {/* Use calendar */}
                        <div className='control '>
                            <div className="select ">
                                <select name='eligTwentyFiveBool' value={values.eligTwentyFiveBool} onChange={handleChange}>
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
                                <select name='eligTwentyFiveFind' value={values.eligTwentyFiveFind} onChange={handleChange}>
                                    <option>Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <div className="select is-fullwidth">
                                <select name='eligTwentyFiveFix' value={values.eligTwentyFiveFix} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Does the file contain a Notice of Meeting for eligibility? (1.5) (1.10)'}</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control '>
                            <div className="select ">
                                <select name='eligTwentySixBool' value={values.eligTwentySixBool} onChange={handleChange}>
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
                                <select name='eligTwentySixFind' value={values.eligTwentySixFind} onChange={handleChange}>
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
                                <select name='eligTwentySixFix' value={values.eligTwentySixFix} onChange={handleChange}>
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
        </div >
    )
}

export default EligibilitySection