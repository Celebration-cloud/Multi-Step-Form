/* eslint-disable react/prop-types */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import selectPlan from "./SelectPlan";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


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
        {p?.map((item) => (
          <ToggleButton key={item.id} value="list" aria-label="list">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
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
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary="Jan 9, 2014" />
            </ListItem>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default PickAddOn;
