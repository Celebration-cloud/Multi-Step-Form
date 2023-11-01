import { useState } from 'react';
import GoBack from '../GoBack';
import Submit from '../Submit';
import { PersonalInfo, PickAddOns, SelectYourPlan } from './ProceduresList'

const slide = [
  <>
    <PersonalInfo />
  </>,
  <>
    <SelectYourPlan />
  </>,
  <>
    <PickAddOns/>
  </>,
];
function Procedures() {
    
  return (
    <form onSubmit={handleSubmit} className='forms'>
      {slide[pages - 1]}
      <div className="submitStyle">
        {pages > 1 && <GoBack handlePrev={handlePrev}/>}
        <Submit handleNext={handleNext}/>
      </div>
    </form>
  );
}

export default Procedures
