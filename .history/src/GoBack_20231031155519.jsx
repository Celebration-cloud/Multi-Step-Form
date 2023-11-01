import React from 'react'

function GoBack({han}) {
  return (
    <>
      <button onChange={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
