/* eslint-disable react/prop-types */
import {useState} from 'react'
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function SelectingPlan({item, toggle}) {
    const [alignment, setAlignment] = useState("Arcade");
    const [planning, setPlanning] = useState([]);
  return (
      <ToggleButton className="selectingPlan" value={item.title}>
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
  );
}

export default SelectingPlan
