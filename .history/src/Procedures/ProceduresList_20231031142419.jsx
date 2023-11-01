import React from 'react'
import './Procedures.css'
function PersonalInfo() {
  return (
    <div style={{height: "100vh"}}>
      <h2 className="personalInfo">Personal info</h2>
      <p className="formDit">
        Please provide your name, email address, and phone number.
      </p>
      <br />
      <form className="forming">
        <label className="inputs" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="formInfo"
          id="name"
          type="text"
          placeholder="e.g Stephen King"
        />
        <br />
        <label className="inputs" htmlFor="email">
          Email Address
        </label>
        <br />
        <input
          className="formInfo"
          id="email"
          type="text"
          placeholder="e.g e.g. stephenking@lorem.com"
        />
        <br />
        <label className="inputs" htmlFor="phoneNumber">
          Phone Number
        </label>
        <br />
        <input
          className="formInfo"
          id="phoneNumber"
          type="text"
          placeholder="e.g +1 234 567 890"
        />
        <br />
        <
        <button className="formBtn">Next Step</button>
      </form>
    </div>
  );
}

export {PersonalInfo};