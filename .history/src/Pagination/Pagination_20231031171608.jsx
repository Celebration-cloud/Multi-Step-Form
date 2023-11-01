import PaginationStep from "./PaginationStep";
import './Pagination.css'
function Pagination({pages}) {
  return (
    <>
      {pages ===PaginationStep?.map((item) => (
        <div className="pageStep row" key={item.id}>
          <div className="pageNum col-1"><p>{item.number}</p></div>
          <div className="stepInfo col-9">
            <p className="steps" >STEP {item.step}</p>
            <p className="info">{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
