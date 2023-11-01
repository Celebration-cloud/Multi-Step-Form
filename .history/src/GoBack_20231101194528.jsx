/* eslint-disable react/prop-types */
function GoBack({handlePrev}) {
  return (
    <>
      <button onDoubleClick={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
