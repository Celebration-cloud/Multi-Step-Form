import PaginationStep from "./PaginationStep";
import './Pagination.css'
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <div className="pasrow" key={item.id}>
          <div className="col-1">{item.number}</div>
          <div className="col-9">
            <p style={{fontSize: 10}}>STEP {item.step}</p>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
