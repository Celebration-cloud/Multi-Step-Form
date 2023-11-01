import Submit from '../Submit';
import { PersonalInfo, SelectYourPlan } from './ProceduresList'

function Procedures() {
    const slide = [
        <>
            <PersonalInfo/>
        </>,
        <>
            <SelectYourPlan/>
        </>,

    ]
  return (
    <>
      {slide[0]}
      <div className="submitStyle">
        <button className='form'></button>
        <Submit/>
      </div>
    </>
  );
}

export default Procedures
