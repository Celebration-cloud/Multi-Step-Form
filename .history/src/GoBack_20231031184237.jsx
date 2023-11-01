/* eslint-disable react/prop-types */
function GoBack({handlePrev}) {
  return (
    <>
      <button onChan={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
