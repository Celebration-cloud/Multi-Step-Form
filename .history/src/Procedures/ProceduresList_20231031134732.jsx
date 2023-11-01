import React from 'react'

function PersonalInfo() {
  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <br/>
      <form>
        <label htmlFor='name'>Name</label><br/>
        <input className='nameInfo' id='name' type='text' placeholder='e.g '/>
        <br/>
        <label htmlFor='name'>Email</label><br/>
        <input className='nameInfo' id='name' type='text' placeholder='e.g '/>
        <br/>
        <label htmlFor='name'>Name</label><br/>
        <input className='nameInfo' id='name' type='text' placeholder='e.g '/>
        <br/>
      </form>
    </>
  );
}

export {PersonalInfo};