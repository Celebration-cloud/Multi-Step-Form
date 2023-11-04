/* eslint-disable react/prop-types */

function Submit({handleSubmit}) {
  return (
    <div className="su">
      <button onChange={handleSubmit} className="formBtn">Next Step</button>
    </div>
  );
}

export default Submit
