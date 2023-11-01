/* eslint-disable react/prop-types */
import { useState } from 'react';
import GoBack from '../GoBack';
import Submit from '../Submit';
function Procedures({store, handlePrev, handleSubmit, slide, pages}) {
    const [details, setDetails] = useState()
  return (
    <form onSubmit={handleSubmit} className='forms'>
      {slide[pages - 1]}
      <div className="submitStyle">
        {pages > 1 && <GoBack handlePrev={handlePrev}/>}
        <Submit handleSubmit={handleSubmit}/>
      </div>
    </form>
  );
}

export default Procedures
