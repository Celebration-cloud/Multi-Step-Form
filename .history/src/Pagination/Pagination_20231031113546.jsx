import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <>
        {item.info}
          <div className="row"key={item.id}>
            <div className="col-2">{item.number}</div>
            <div className="col-8">.col-</div> 
          </div>
        </>
      ))}
    </>
  );
}

export default Pagination;
