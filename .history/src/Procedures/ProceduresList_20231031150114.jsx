import React from 'react'
import './Procedures.css'
import Submit from '../Submit';
function PersonalInfo() {
  return (
    <>
      <h2 className="personalInfo">Personal info</h2>
      <p className="formDit">
        Please provide your name, email address, and phone number.
      </p>
      <br />
      <form className="forms">
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
          type="email"
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
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="e.g +1 234 567 890"
          maxLength={11}
        />
        <br />
        <div className='submitStyle'>
           <Submit/>
        </div>
        
      </form>
    </>
  );
}

export {PersonalInfo};