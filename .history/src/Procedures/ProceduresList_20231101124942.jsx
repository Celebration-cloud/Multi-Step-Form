import './Procedures.css'
import selectPlan from './SelectPlan';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from 'react';
function PersonalInfo() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: Number,
  })
  const handlePersonalInfo = (e) => {
    if(Number(personalData.phoneNumber)) return;
    const {name, value} = e.target
    setPersonalData(prev => {return {...prev, [name]: value}})
    const formData = {
      name: personalData.name,
      email: personalData.email,
      number: personalData.phoneNumber
    }

  }
  return (
    <div className="mobileTab">
      <h2 className="personalInfo">Personal info</h2>
      <p className="formDit">
        Please provide your name, email address, and phone number.
      </p>
      <br />

      <label className="inputs" htmlFor="name">
        Name{personalData.name.length < 1 && <span style={{color: "red", marginLe: ""}}>hw</span>}
        
      </label>
      <br />
      <input
        style={personalData.name.length < 1 ? { border: "1px solid red" } : {}}
        className="formInfo"
        aria-controls="is-active"
        id="name"
        name="name"
        value={personalData.name}
        onChange={handlePersonalInfo}
        required
        type="text"
        placeholder="e.g Stephen King"
      />
      <br />
      <label className="inputs" htmlFor="email">
        Email Address
      </label>
      <br />
      <input
        className="formInfo"
        id="email"
        name="email"
        type="email"
        value={personalData.email}
        onChange={handlePersonalInfo}
        required
        placeholder="e.g e.g. stephenking@lorem.com"
      />
      <br />
      <label className="inputs" htmlFor="phoneNumber">
        Phone Number
      </label>
      <br />
      <input
        className="formInfo"
        id="phoneNumber"
        name="phoneNumber"
        value={personalData.phoneNumber}
        onChange={handlePersonalInfo}
        type="tel"
        required
        placeholder="e.g +1 234 567 890"
        maxLength={11}
      />
      <br />
    </div>
  );
}
function SelectYourPlan() {
  
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return (
      <div className='mobileTab'>
        <h2 className="planTitle">Select Your Plan</h2>
        <p className="formDit">
          You have the option of monthly or yearly billing.
        </p>
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
                    ${item.monthPrice}/{item.month}
                  </span>
                </div>
              </div>
            </ToggleButton>
          </ToggleButtonGroup>
        ))}
        <div className='monYr'>
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
      </div>
    );
}
function PickAddOns() {
    return (
      <div className="mobileTab">
        <h2 className="planTitle">Pick add-ons</h2>
        <p className="formDit">Add-ons help enhance your gaming experience.</p>
      </div>
    );
}

export {PersonalInfo, SelectYourPlan, PickAddOns};