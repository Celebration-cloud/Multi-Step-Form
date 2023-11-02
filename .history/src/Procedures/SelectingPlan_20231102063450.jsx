/* eslint-disable react/prop-types */
import {useState} from 'react'
import ToggleButton from "@mui/material/ToggleButton";
function SelectingPlan({item, toggle, plans}) {
    const [planning, setPlanning] = useState([]);
    
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
        </ToggleButtonGroup>
      ))}
    </>
  );
}

export default SelectingPlan
