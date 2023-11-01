import React from 'react'

function Submit({handleNext}) {
  return (
    <>
      <button onChange={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
