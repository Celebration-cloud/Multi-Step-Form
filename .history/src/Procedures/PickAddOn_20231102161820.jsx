/* eslint-disable react/prop-types */
import * as React from "react";
function PickAddOn({addOn}) {
  const [picking, setPicking] = React.useState([])
  const [pick, setPick] = React.useState(false)
  
  const handlePick = (tick) =>{
    if(tick === false)return;
  }
const handlePicking = (e) => {
    const {checked, value} = e.target
    if(checked){
      setPicking((prev)=> [...prev, value])
    }else{
      setPicking((prev) => {return {...prev.filter((item) => item !== value)}})
    }
    console.log(picking)
    addOn(picking)
  }
  return (
    <>
      
    </>
  );
}

export default PickAddOn;
