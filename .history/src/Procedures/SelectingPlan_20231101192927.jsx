import {useState} from 'react'
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function SelectingPlan({item}) {
    const [alignment, setAlignment] = useState("Arcade");
    const [toggle, setToggle] = useState(false);
    const [planning, setPlanning] = useState([]);

    const handleToggle = (e) => {
      const { value, type, checked } = e.target;
      setToggle(type === "checkbox" ? checked : value);
    };
    const handleChange = (event, newAlignment) => {
      event.preventDefault();
      setAlignment(newAlignment);
      console.log(planning);
      plans(planning);
    };
  return (
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
  );
}

export default SelectingPlan
