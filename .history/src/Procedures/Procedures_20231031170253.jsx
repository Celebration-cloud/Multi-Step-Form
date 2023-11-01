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
    const [pages, setPages] = useState(1)
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const handleNext = () => {
        if
        if(pages < 4)
        setPages(prev => prev + 1)
    }
    const handlePrev = () => {
        if(pages >= 1)
        setPages(prev => prev - 1)
    }
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
