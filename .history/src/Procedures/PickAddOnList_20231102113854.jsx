import {v4 as uuid} from 'uuid'
const pickAddOnList = [
    {
        id: uuid(),
        name: "Online service",
        description: "Access to multiplayer games",
        price: 1,
        packed: 
    },
    {
        id: uuid(),
        name: "Large storage",
        description: "Extra 1TB of cloud save",
        price: 2,
    },
    {
        id: uuid(),
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: 2,
    },
]
export default pickAddOnList;