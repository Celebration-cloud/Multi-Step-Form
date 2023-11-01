import React from 'react'

function PersonalInfo() {
  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <br/>
      <form className='per'>
        <label htmlFor='name'>Name</label><br/>
        <input className='formInfo' id='name' type='text' placeholder='e.g '/>
        <br/>
        <label htmlFor='email'>Email Address</label><br/>
        <input className='formInfo' id='email' type='text' placeholder='e.g '/>
        <br/>
        <label htmlFor='phoneNumber'>Phone Number</label><br/>
        <input className='nameInfo' id='phoneNumber' type='text' placeholder='e.g '/>
        <br/>
      </form>
    </>
  );
}

export {PersonalInfo};