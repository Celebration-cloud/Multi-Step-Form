import PaginationStep from "./PaginationStep";
i
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <div className="pagination row" key={item.id}>
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
