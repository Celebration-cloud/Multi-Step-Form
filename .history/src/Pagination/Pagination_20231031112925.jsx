import PaginationStep from "./PaginationStep"
function Pagination() {
  return (
    <>
      {PaginationStep.map((item) => (
        <div key={item.id}>{item}</div>
      ))}
    </>
  )
}

export default Pagination
