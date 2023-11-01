import { useState } from 'react'
import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Pagination from './Pagination/Pagination';


function App() {

  return (
    <>
      <div className="row">
        <div className="col-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="274"
            height="568"
            fill="none"
            viewBox="0 0 274 568"
          >
            <rect width="274" height="568" fill="#483EFF" rx="10" />
            <mask
              id="a"
              width="274"
              height="568"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style="mask-type:alpha"
            >
              <rect width="274" height="568" fill="#fff" rx="10" />
            </mask>
            <g mask="url(#a)">
              <path
                fill="#6259FF"
                fill-rule="evenodd"
                d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
                clip-rule="evenodd"
              />
              <path
                fill="#F9818E"
                fill-rule="evenodd"
                d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
                clip-rule="evenodd"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="5"
                d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
              />
              <path
                fill="#FFAF7E"
                d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
              />
            </g>
          </svg>
          <Pagination />
        </div>
        <div className="col-8">col-4</div>
      </div>
    </>
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