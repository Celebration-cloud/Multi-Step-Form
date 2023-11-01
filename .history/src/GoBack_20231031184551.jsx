/* eslint-disable react/prop-types */
function GoBack({handlePrev}) {
  return (
    <>
      <button onCl={handlePrev} className="backBtn">Go Back</button>
    </>
  );
}

export default GoBack
