import { useState } from 'react';
import GoBack from '../GoBack';
import Submit from '../Submit';
import { PersonalInfo, SelectYourPlan } from './ProceduresList'

const slide = [
  <>
    <PersonalInfo />
  </>,
  <>
    <SelectYourPlan />
  </>,
];
function Procedures() {
    const [pages, setPages] = useState(1)
    const handleD
    const handleNext = () => {
        if(pages > 0)
        setPages(prev => prev + 1)
    }
    const handlePrev = () => {
        if(pages < 5)
        setPages(prev => prev - 1)
    }
  return (
    <form className='forms' onSubmit={handleSubmit}>
      {slide[pages - 1]}
      <div className="submitStyle">
        {slide === 0 && <GoBack handlePrev={handlePrev}/>}
        <Submit handleNext={handleNext}/>
      </div>
    </form>
  );
}

export default Procedures
