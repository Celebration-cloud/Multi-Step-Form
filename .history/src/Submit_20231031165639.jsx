/* eslint-disable react/prop-types */

function Submit({handleNext}) {
  return (
    <>
      <button type="submit" onChange={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
