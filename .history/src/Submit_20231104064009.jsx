/* eslint-disable react/prop-types */

function Submit({handleSubmit}) {
  return (
    <div>
      <button onChange={handleSubmit} className="formBtn">Next Step</button>
    </div>
  );
}

export default Submit
