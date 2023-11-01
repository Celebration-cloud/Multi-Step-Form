import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep?.map((item) => (
        <div key={item.id}>
          <div className="row"><div className="col-6 col-md-4">.col-6 .col-md-4</div>
            
            <div className="col-md-8">.col-</div> 
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
