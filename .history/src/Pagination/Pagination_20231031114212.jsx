import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-1">{item.number}</div>
          <div className="col-9">
            <p style={{fontSize: 10}}>STEP {item.step}</p>
            <h6>{</h6>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
