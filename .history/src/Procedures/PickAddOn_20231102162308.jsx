/* eslint-disable react/prop-types */
import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

function PickAddOn({addOn}) {
  const [view, setView] = React.useState("list");

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
          
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default PickAddOn;
