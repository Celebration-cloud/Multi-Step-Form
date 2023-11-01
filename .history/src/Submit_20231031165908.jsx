/* eslint-disable react/prop-types */

function Submit({handleSubmit, handleNext}) {
  return (
    <>
      <button ha onClick={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
