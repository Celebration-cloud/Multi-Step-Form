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
    const handleNext = () => {
        setPages(prev => prev + 1)
    }
    const handlePrev = () => {
        setPages(prev => prev )
    }
  return (
    <>
      {slide[0]}
      <div className="submitStyle">
        <GoBack handlePrev={handlePrev}/>
        <Submit handleNext={handleNext}/>
      </div>
    </>
  );
}

export default Procedures
