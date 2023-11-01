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
          required
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
          required
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
function Select() {
    
}

export {PersonalInfo};