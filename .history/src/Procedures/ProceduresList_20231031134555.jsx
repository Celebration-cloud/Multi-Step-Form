import React from 'react'

function PersonalInfo() {
  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <br/>
      <form>
        <label htmlFor='name'>Name</label><br/>
        <input id='name' type='text' placeholder='e.g '/>
      </form>
    </>
  );
}

export {PersonalInfo};