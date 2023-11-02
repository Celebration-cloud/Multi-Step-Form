/* eslint-disable react/prop-types */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckIcon from "@mui/icons-material/Check";

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
        <ToggleButton value="list" aria-label="list">
          <ToggleButton
            style={{width: ""}}
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <CheckIcon />
          </ToggleButton>
          
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default PickAddOn;
