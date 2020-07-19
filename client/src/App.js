import React from 'react';
import './App.css';
import PersonalInfoForm from './components/formComponents/PersonalInfoForm/PersonalInfoForm';


function App() {
  return (
    <section className='hero is-info is-bold is-fullheight'>
      <div className='box my-5 mx-5'>
        <PersonalInfoForm />
      </div>
    </section>
  );
}

export default App;
