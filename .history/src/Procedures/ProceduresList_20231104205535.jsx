/* eslint-disable react/prop-types */
import './Procedures.css'
import selectPlan from './SelectPlan';
import { useState } from 'react';
import SelectingPlan from './SelectingPlan';
import PickAddOn from './PickAddOn';
function PersonalInfo({store}) {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: 234
  })
  const handlePersonalInfo = (e) => {
    const {name, value, type} = e.target
    setPersonalData(prev => {return {...prev, [name]: type === 'tel' ? Number(value.replace(/[^0-9]/g, '') ): value}})
    if (Number(.phoneNumber).length < 14) return;
    if (!pageDetail.email.includes("@gmail.com")) return;
    console.log(personalData)
    store(personalData)
  }
  return (
    <div className="mobileTab">
      <h2 className="personalInfo">Personal info</h2>
      <p className="formDit">
        Please provide your name, email address, and phone number.
      </p>
      <br />
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <label className="inputs" htmlFor="name">
          Name
        </label>
        {personalData.name.length < 1 && (
          <span style={{ color: "red", fontSize: 10 }}>
            This Field is required
          </span>
        )}
      </span>
      <input
        style={personalData.name.length < 1 ? { border: "1px solid red" } : {}}
        className="formInfo"
        id="name"
        name="name"
        value={personalData.name}
        onChange={handlePersonalInfo}
        required
        type="text"
        placeholder="e.g Stephen King"
      />
      <br />
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <label className="inputs" htmlFor="email">
          Email Address
        </label>
        {personalData.email.length >= 1 ? (
          !personalData.email.includes("@gmail.com") && (
            <span style={{ color: "red", fontSize: 10 }}>
              Input the correct format
            </span>
          )
        ) : (
          <span style={{ color: "red", fontSize: 10 }}>
            This Field is required
          </span>
        )}
      </span>
      <input
        className="formInfo"
        style={
          !personalData.email.includes("@gmail.com")
            ? { border: "1px solid red" }
            : {}
        }
        id="email"
        name="email"
        type="email"
        value={personalData.email}
        onChange={handlePersonalInfo}
        required
        placeholder="e.g. stephenking@lorem.com"
      />
      <br />
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <label className="inputs" htmlFor="phoneNumber">
          Phone Number
        </label>
        {Number(personalData.phoneNumber).toString().length > 3 ? (
          Number(personalData.phoneNumber).toString().length < 13 && (
            <span style={{ color: "red", fontSize: 10 }}>
              Max-length: 11
            </span>
          )
        ) : (
          <span style={{ color: "red", fontSize: 10 }}>
            This Field is required
          </span>
        )}
      </span>
      <input
        className="formInfo"
        style={
          Number(personalData.phoneNumber).toString().length < 13
            ? { border: "1px solid red" }
            : {}
        }
        id="phoneNumber"
        name="phoneNumber"
        value={personalData.phoneNumber}
        onChange={handlePersonalInfo}
        type="tel"

        inputMode='numeric'
        required
        placeholder="e.g +1 234 567 890"
        maxLength={13}
      />
      <br />
    </div>
  );
}
function SelectYourPlan({plans}) {
  const [toggle, setToggle] = useState(false)
  
  const handleToggle = (e) => {
    const {value, type, checked} = e.target
    setToggle(type === "checkbox" ? checked : value )
  }
    return (
      <div className="mobileTab">
        <h2 className="planTitle">Select Your Plan</h2>
        <p className="formDit">
          You have the option of monthly or yearly billing.
        </p>
        <SelectingPlan selectPlan={selectPlan} toggle={toggle} plans={plans} />
        <div className="monYr">
          <span
            style={
              toggle === false ? { fontWeight: "bolder", color: "navy" } : {}
            }
          >
            Monthly
          </span>
          <label className="switch">
            <input
              type="checkbox"
              name="toggle"
              value={toggle}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
          <span
            style={
              toggle === true ? { fontWeight: "bolder", color: "navy" } : {}
            }
          >
            Yearly
          </span>
        </div>
      </div>
    );
}
function PickAddOns({addOn}) {
  
    return (
      <div className="mobileTab">
        <h2 className="planTitle">Pick add-ons</h2>
        <p className="formDit">Add-ons help enhance your gaming experience.</p>
        <PickAddOn addOn={addOn}/>
      </div>
    );
}

function FinishingUp ({addOn}){
  return (
    <div className='mobileTab'>
      <h2 className='planTitle'>Finishing Up!</h2>
      <p className='formDit'>Double-check everything looks OK before confirming.</p>
    </div>
  )
}

export {PersonalInfo, SelectYourPlan, PickAddOns, FinishingUp};