import './Procedures.css'
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'
import { useState } from 'react';
function PersonalInfo() {
  return (
    <>
      <h2 className="personalInfo">Personal info</h2>
      <p className="formDit">
        Please provide your name, email address, and phone number.
      </p>
      <br />

      <label className="inputs" htmlFor="name">
        Name
      </label>
      <br />
      <input
        className="formInfo"
        id="name"
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
        type="email"
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
        type="tel"
        required
        placeholder="e.g +1 234 567 890"
        maxLength={11}
      />
      <br />
    </>
  );
}
function SelectYourPlan() {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return (
      <>
        <h2 className="planTitle">Select Your Plan</h2>
        <p className="formDit">
          You have the option of monthly or yearly billing.
        </p>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </>
    );
}
function PickAddOns() {
    return (
      <>
        <h2 className="planTitle">Pick add-ons</h2>
        <p className="formDit">Add-ons help enhance your gaming experience.</p>
      </>
    );
}

export {PersonalInfo, SelectYourPlan, PickAddOns};