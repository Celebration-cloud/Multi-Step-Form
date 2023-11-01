import PaginationStep from "./PaginationStep"
function Pagination() {
  return (
    <>
      {PaginationStep.map((item) => (
        <div key={item.id}>
          <div class="row">
            <div class="col-md-8">.col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pagination
