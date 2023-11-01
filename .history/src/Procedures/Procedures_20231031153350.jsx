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
        <Subm
      </div>
    </>
  );
}

export default Procedures
