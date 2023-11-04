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
  // const handleChange = (event, nextView) => {
  //   if(selected === true){
  //     setView(prev => [...prev, nextView])
  //   }else{
  //     setView(prev => {return prev.filter((item) => {return item.id !== nextView.id}) })
  //   }
  //   addOn(view)
  // };
  // let removing;
  //   pickAddOnList.map((item)=> item)
  const handleTick = (e) => {
    const {value, checked} = e.target
    setSelected(prev => [...prev, checked])
    if (selected === true) {
      setView((prev) => [...prev, value])
    } else {
      setView(prev => {return prev.filter((item) => item.packed === selected)})
    }
    addOn(view)
  }
  return (
    <>
    <div style={{display: 'flex', justifyContent:'center'}}>
      {pickAddOnList?.map((odds)=> (
        <div key={odds.id}>
          <input type="checkbox" checked={selected} onChange={handleTick} value={odds} />
          <div>
            <h6>{odds.name}</h6>
            <span>{odds.description}</span>
          </div>
          <span>${odds.price}</span>
        </div>
      ))}
    </div>
    </>
    // <>{pickAddOnList?.map((item) => (
    //   <ToggleButtonGroup
    //     key={item.id}
    //     orientation="vertical"
    //     value={view}
    //     exclusive
    //     onChange={handleChange}
    //   >
        
    //       <ToggleButton value={item} aria-label="list">
    //         <ListItem>
    //           <ListItemAvatar>
    //               <ToggleButton
    //                 style={{ width: "10px", height: "10px", margin: "0px" }}
    //                 value={item.packed}
    //                 selected={selected}
    //                 onChange={() => {
    //                   setSelected(!selected);
    //                 }}
    //               >
    //                 {selected === true &&<CheckIcon />}
    //               </ToggleButton>
    //           </ListItemAvatar>
    //           <ListItemText primary={item.name} secondary={item.description} />
    //         </ListItem>
    //         +{item.price}/
    //       </ToggleButton>
        
    //   </ToggleButtonGroup>))}
    // </>
  );
}

export default PickAddOn;
