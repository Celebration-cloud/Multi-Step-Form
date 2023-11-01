import PaginationStep from "./PaginationStep"
function Pagination() {
  return (
    <>
      {PaginationStep.map((item) => (
        <div key={item.id}>
            
        </div>
      ))}
    </>
  )
}

export default Pagination
