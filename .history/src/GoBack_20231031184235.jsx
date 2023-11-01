/* eslint-disable react/prop-types */
function GoBack({handlePrev}) {
  return (
    <>
      <button onC={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
