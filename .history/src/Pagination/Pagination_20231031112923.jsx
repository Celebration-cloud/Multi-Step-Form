import PaginationStep from "./PaginationStep"
function Pagination() {
  return (
    <>
      {PaginationStep.map((item) => (
        <div key={item,}>{item}</div>
      ))}
    </>
  )
}

export default Pagination
