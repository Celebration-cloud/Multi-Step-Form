import React from 'react'

function Submit({handleNext}) {
  return (
    <>
      <button onCli={handleNext} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
