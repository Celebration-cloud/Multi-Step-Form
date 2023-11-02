/* eslint-disable react/prop-types */
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {useState} from 'react'
import ToggleButton from "@mui/material/ToggleButton";
function SelectingPlan({selectPlan, toggle, plans}) {
  const [alignment, setAlignment] = useState("Arcade");
    const [planning, setPlanning] = useState([]);
    const handleChange = (event, newAlignment) => {
      event.preventDefault();
      setAlignment(newAlignment);
    };
    const handlePlan = (id) =>{
      selectPlan.map((item)=> (item.id === id && setPlanning(item)))
      plans(planning)
    }
  return (
    <>
      {selectPlan.map((item) => (
        <ToggleButtonGroup
          className="planGap"
          key={item.id}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton className="selectingPlan" value={item}>
            <div className="selectPlan">
              <img src={item.img} width="50px" alt="" />
              <div>
                <h6>{item.title}</h6>
                <span>
                  ${toggle === false ? item.monthPrice : item.yearPrice}/
                  {toggle === false ? item.month : item.year}
                </span>
              </div>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>
      ))}
    </>
  );
}

export default SelectingPlan