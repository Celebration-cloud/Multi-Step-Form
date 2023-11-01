import { useState } from 'react'
import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Pagination from './Pagination/Pagination';
import Procedures from './Procedures/Procedures';
import { PersonalInfo, PickAddOns, SelectYourPlan } from "../src/Procedures/ProceduresList";

const slide = [
  <>
    <PersonalInfo />
  </>,
  <>
    <SelectYourPlan />
  </>,
  <>
    <PickAddOns />
  </>,
];

function App() {
  const [pages, setPages] = useState(1)
    const [pageDetail, setPageDetail] = useState([])
    const handleNext = () => {
        if(pages < 4)
        setPages(prev => prev + 1)
    }
    const handlePrev = () => {
        if(pages >= 1)
        setPages(prev => prev - 1)
    }
    const handleSubmit = (e) => {
      e.preventDefault();

      handleNext()
    };
  return (
    <div className="forming row">
      <div className="pagination col-md-2">
        <Pagination pages={pages} />
      </div>
      <div className="proceed col-sm-8">
        <Procedures
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
          slide={slide}
          pages={pages}
        />
      </div>
    </div>
  );
}

export default App

{/* <div>
     Sidebar start 
    Step 1
  Your info

  Step 2
  Select plan

  Step 3
  Add-ons

  Step 4
  Summary

  Sidebar end 

   Step 1 start

  Personal info
  Please provide your name, email address, and phone number.

  Name
  e.g. Stephen King

  Email Address
  e.g. stephenking@lorem.com

  Phone Number
  e.g. +1 234 567 890

  Next Step

  Step 1 end 

   Step 2 start 

  Select your plan
  You have the option of monthly or yearly billing.

  Arcade
  $9/mo

  Advanced
  $12/mo

  Pro
  $15/mo

  Monthly
  Yearly

  Go Back
  Next Step

  Step 2 end 

   Step 3 start 

  Pick add-ons
  Add-ons help enhance your gaming experience.

  Online service
  Access to multiplayer games
  +$1/mo

  Larger storage
  Extra 1TB of cloud save
  +$2/mo

  Customizable Profile
  Custom theme on your profile
  +$2/mo

  Go Back
  Next Step

   Step 3 end 

  Step 4 start 

  Finishing up
  Double-check everything looks OK before confirming.

   Dynamically add subscription and add-on selections here 

  Total (per month/year)

  Go Back
  Confirm

   Step 4 end 

  Step 5 start

  Thank you!

  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.

   Step 5 end 
  </div> */}