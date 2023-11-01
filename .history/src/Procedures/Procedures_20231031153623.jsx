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
        <Submit>Go</Submit>
        <Submit/>
      </div>
    </>
  );
}

export default Procedures
