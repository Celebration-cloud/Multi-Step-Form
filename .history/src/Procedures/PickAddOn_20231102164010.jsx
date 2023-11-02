/* eslint-disable react/prop-types */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import selectPlan from "./SelectPlan";

function PickAddOn({addOn}) {
  const [view, setView] = React.useState("list");
  const [selected, setSelected] = React.useState(false);
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        {selectPlan?.map((item) => (
          <ToggleButton key={item.id} value="list" aria-label="list">
            <ToggleButton
              style={{ width: "10px", height: "20px", margin: "10px" }}
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              <CheckIcon />
            </ToggleButton>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default PickAddOn;
