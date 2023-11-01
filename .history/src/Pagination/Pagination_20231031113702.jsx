import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <>
          <div className="row"key={item.id}>
            <div className="col-6">{item.number}</div>
            <div className="col-">.col-</div> 
          </div>
        </>
      ))}
    </>
  );
}

export default Pagination;
