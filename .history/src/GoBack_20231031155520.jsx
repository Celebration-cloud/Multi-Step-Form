import React from 'react'

function GoBack({handlePrev}) {
  return (
    <>
      <button onChange={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
