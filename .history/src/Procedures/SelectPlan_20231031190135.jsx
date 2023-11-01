import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'
import {v4 as uuid} from 'uuid'
const selectPlan = [
    {
      id: uuid(), 
      img: Arcade,
      title: "Arcade",
      monthPrice: 9,
      yearPrice: 90,
      month: "mo",
      year: "yr"
    },
    {
      img: Advanced,
      title: "Advanced",
      monthPrice: 12,
      yearPrice: 120,
      month: "mo",
      year: "yr"
    },
    {
      img: Pro,
      title: "Pro",
      monthPrice: 15,
      yearPrice: 150,
      month: "mo",
      year: "yr"
    },
  ]