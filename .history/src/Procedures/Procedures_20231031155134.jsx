import GoBack from '../GoBack';
import Submit from '../Submit';
import { PersonalInfo, SelectYourPlan } from './ProceduresList'

function Procedures() {
    const [pages, set]
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
        <GoBack/>
        <Submit />
      </div>
    </>
  );
}

export default Procedures
