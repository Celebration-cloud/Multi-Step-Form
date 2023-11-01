import React from 'react'

function Submit({handleNext}) {
  return (
    <>
      <button onClick={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
