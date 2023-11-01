/* eslint-disable react/prop-types */
import { useState } from 'react';
import GoBack from '../GoBack';
import Submit from '../Submit';
function Procedures({ handlePrev, handleSubmit, slide, pages}) {
    
  return (
    <>
      {slide[pages - 1]}
      <div className="submitStyle">
        {pages > 1 && <GoBack handlePrev={handlePrev}/>}
        <Submit handleSubmit={handleSubmit}/>
      </div>
    </>
  );
}

export default Procedures
