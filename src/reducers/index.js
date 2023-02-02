import { combineReducers } from 'redux'
import product from "./cards"
import product1 from "./cards1"
import product2 from "./cards2"
import product3 from "./cards3"
import product4 from "./cards4"
import product5 from "./cards5"
import button from "./button"


export default combineReducers({
    product,
    product1,
    product2,
    product3,
    product4,
    product5,
    button
  })