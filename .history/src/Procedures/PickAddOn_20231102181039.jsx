/* eslint-disable react/prop-types */
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import pickAddOnList from "./PickAddOnList";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


function PickAddOn({addOn, planner}) {
  const [view, setView] = React.useState([]);
  const [selected, setSelected] = React.useState(false);
  const handleChange = (event, nextView) => {
    if(selected === true){
      setView(prev => [...prev, nextView])
    }else{
      setView(prev => {return prev.filter((item) => {return item.id !== nextView.id}) })
    }
    addOn(view)
  };

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        value={view.includes()}
        exclusive
        onChange={handleChange}
      >
        {pickAddOnList?.map((item) => (
          <ToggleButton key={item.id} value={view.includes(item.)} aria-label="list">
            <ListItem>
              <ListItemAvatar>
                  <ToggleButton
                    style={{ width: "10px", height: "20px", margin: "10px" }}
                    value={item.packed}
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <CheckIcon />
                  </ToggleButton>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItem>
            +{item.price}/
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default PickAddOn;
