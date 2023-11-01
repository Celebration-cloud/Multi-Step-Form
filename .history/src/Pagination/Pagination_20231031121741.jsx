import PaginationStep from "./PaginationStep";
import './Pagination.css'
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <div className="pageStep row" key={item.id}>
          <div className="pageNum col-1"><p>{item.number}</p></div>
          <div className="col-9">
            <p className="step" style={{fontSize: 10, color: "white"}}>STEP {item.step}</p>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
