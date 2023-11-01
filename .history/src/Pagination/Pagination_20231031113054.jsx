import PaginationStep from "./PaginationStep";
function Pagination() {
  return (
    <>
      {PaginationStep.map((item) => (
        <div key={item.id}>
          <div cla="row">
            <div cla="col-md-8">.col-md-8</div>
            <div cla="col-6 col-md-4">.col-6 .col-md-4</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination;
