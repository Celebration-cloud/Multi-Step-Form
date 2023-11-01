import {v4 as uuid} from 'uuid'
const PaginationStep = [
  {
    id: uuid(),
    number: 1,
    step: 1,
    info: "YOUR INFO",
  },
  {
    id: uuid(),
    number: 2,
    step: 2,
    info: "SELECT PLAN",
  },
  {
    id: uuid(),
    number: 3,
    step: 3,
    info: "ADD-ONS",
  },
  {
    id: uuid(),
    number: 4,
    step: 4,
    info: "SUMMARY",
  },
];
export default PaginationStep
