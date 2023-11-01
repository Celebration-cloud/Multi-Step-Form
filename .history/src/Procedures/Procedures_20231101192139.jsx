/* eslint-disable react/prop-types */
import { useState } from 'react';
import GoBack from '../GoBack';
import Submit from '../Submit';
function Procedures({handlePrev, handleSubmit, slide, pages}) {
  return (
    <>
    
    </>
    <form onSubmit={handleSubmit} className='forms'>
      {slide[pages - 1]}
      <div className="submitStyle">
        {pages > 1 && <GoBack handlePrev={handlePrev}/>}
        
      </div>
    </form>
    <Submit handleSubmit={handleSubmit}/>
  );
}

export default Procedures
