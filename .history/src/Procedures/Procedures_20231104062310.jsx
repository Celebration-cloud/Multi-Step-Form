/* eslint-disable react/prop-types */
import GoBack from '../GoBack';
import Submit from '../Submit';
function Procedures({handlePrev, handleSubmit, slide, pages}) {
  return (
    <>
    <form onSubmit={handleSubmit} className='forms'>
      {slide[pages - 1]}
      
        <Submit handleSubmit={handleSubmit}/>
    </form>
    {pages > 1 && <GoBack handlePrev={handlePrev}/>}
    </>
    
  );
}

export default Procedures
