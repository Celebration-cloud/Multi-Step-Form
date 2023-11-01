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
    const handleNext = () = {}
  return (
    <>
      {slide[0]}
      <div className="submitStyle">
        <GoBack />
        <Submit />
      </div>
    </>
  );
}

export default Procedures
