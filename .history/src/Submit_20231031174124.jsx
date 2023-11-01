/* eslint-disable react/prop-types */

function Submit({handleNext}) {
  return (
    <>
      <button onCh={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
