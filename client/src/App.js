import React from 'react';
import './App.css';
import PersonalInfoForm from './components/formComponents/PersonalInfoForm/PersonalInfoForm';
import Header from './components/Header'
import useForm from './hooks/useForm'
import GeneralInformation from './components/formComponents/GeneralInformation/GeneralInformation';

function App() {
 
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
    <section className='hero is-info is-bold is-fullheight'>
      <div className='box my-5 mx-5'>
        <form onSubmit={handleSubmit}>
          <Header />
          <PersonalInfoForm />
          <GeneralInformation/>
          <button className='button is-success mt-5' type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default App;
