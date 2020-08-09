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
        eligOneFind: '',
        eligTwoFind: '',
        eligThreeFind: '',
        eligFourFind: '',
        eligFiveFind: '',
        eligSixFind: '',
        eligSevenFind: '',
        eligEightFind: '',
        eligOneFix: '',
        eligTwoFix: '',
        eligThreeFix: '',
        eligFourFix: '',
        eligFiveFix: '',
        eligSixFix: '',
        eligSevenFix: '',
        eligEightFix: '',
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
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
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
                            <p style={{ fontWeight: 'bold' }}>{'Is the home language different than the primary language? (2.18) (3.17)'}</p>
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
                        <div className='control is-expanded'>
                            <div className="select is-fullwidth">
                                <select name='eligThreeFind' value={values.eligThreeFind} onChange={handleChange}>
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
                            <p style={{ fontWeight: 'bold' }}>{'Alternative Language Services Consulted for primary language other than English?'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Is there a signed Medicaid form (Attached to front of file) (1.1)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Is the box giving consent on the Medicaid form checked (1.2)'}</p>
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
                            <p style={{ fontWeight: 'bold' }}>{'Initial placement in file? (1.3)'}</p>
                        </div>
                    </div>
                    <div className='field'>
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
                            <p style={{ fontWeight: 'bold' }}>{'Is the box on the initial placement form checked? (1.4)'}</p>
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
    )
}

export default EligibilitySection