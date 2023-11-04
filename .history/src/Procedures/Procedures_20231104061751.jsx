/* eslint-disable react/prop-types */
import GoBack from '../GoBack';
import Submit from '../Submit';
function Procedures({handlePrev, handleSubmit, slide, pages}) {
  return (
    <>
    <form onSubmit={handleSubmit} className='forms'>
      {slide[pages - 1]}
      <div className="submitStyle">
        
        <Submit handleSubmit={handleSubmit}/>
      </div>
    </form>
    {pages > 1 && <GoBack handlePrev={handlePrev}/>}
    </>
    
  );
}

export default Procedures
