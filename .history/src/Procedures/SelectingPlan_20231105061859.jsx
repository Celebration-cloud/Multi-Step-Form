/* eslint-disable react/prop-types */
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

function SelectingPlan({ selectPlan, toggle, plans }) {
  const [alignment, setAlignment] = useStat([]);

  const handleChange = (event, newAlignment) => {
    event.preventDefault();
    setAlignment(newAlignment);
    const plane = {
      title: alignment.title,
      total: toggle ? alignment.yearPrice : alignment.monthPrice,
      duration: toggle ? alignment.year : alignment.month,
    };
    plans(plane);
  };

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
                  ${toggle ? item.yearPrice : item.monthPrice}/
                  {toggle ? item.year : item.month}
                </span>
              </div>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>
      ))}
    </>
  );
}

export default SelectingPlan;
