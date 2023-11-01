/* eslint-disable react/prop-types */

function Submit({handleSubmit}) {
  return (
    <>
      <button onChange={handleSubmit} className="formBtn">Next Step</button>
    </>
  );
}

export default Submit
