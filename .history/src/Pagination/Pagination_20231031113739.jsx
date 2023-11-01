import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <>
          <div className="row"key={item.id}>
            <div className="col-">{item.number}</div>
            <div className="col-9">.col-</div> 
          </div>
        </>
      ))}
    </>
  );
}

export default Pagination;
