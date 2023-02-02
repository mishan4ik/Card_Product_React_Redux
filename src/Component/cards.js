import React from "react"
import "./cards.css"
import {connect} from "react-redux"
import CardProduct from "./Card/card.js"
import CardProduct1 from "./Card/card1.js"
import CardProduct2 from "./Card/card2.js"
import CardProduct3 from "./Card/card3.js"
import CardProduct4 from "./Card/card4.js"
import CardProduct5 from "./Card/card5.js"
import {useState} from "react"


let Card = (props) => {
    let[chair,Setchair]=useState("block")
    let[laptop,Setlaptop]=useState("block")
    let[playStation,SetplayStation] = useState("block")
    let[monitor,Setmonitor] = useState("block")
    let[headphones,Setheadphones] = useState("block")
    let[clock,Setclock] = useState("block")

    let Search = (event) => {

        if(event.target.value == "Игровое" || event.target.value == "игровое" || event.target.value == "Игр" || event.target.value == "игр"
        || event.target.value == "кресло" || event.target.value == "razer" || event.target.value == "Razer" || event.target.value == "RAZER"
        || event.target.value == "raz" || event.target.value == "RAZ" || event.target.value == "Raz" ){

            Setchair(chair = "block")
            Setlaptop(laptop = "none")
            SetplayStation(playStation = "none")
            Setmonitor(monitor = "none")
            Setheadphones(headphones = "none")
            Setclock(clock="none")

            
        }
        else if(event.target.value == "Ноутбук" || event.target.value == "ноутбук" || event.target.value == "ноутбуки" 
        || event.target.value == "ноут" || event.target.value == "lenovo" || event.target.value == "LENOVO" || event.target.value == "Lenovo"
        || event.target.value == "Lenovo"){

            Setchair(chair = "none")
            Setlaptop(laptop = "block")
            SetplayStation(playStation = "none")
            Setmonitor(monitor = "none")
            Setheadphones(headphones = "none")
            Setclock(clock="none")

        }
        else if(event.target.value == "Игровая" || event.target.value == "игровая" || event.target.value == "Игр" || event.target.value == "игр" 
        || event.target.value == "приставка" || event.target.value == "прист" || event.target.value == "Sony" || event.target.value == "PlayStation"
        || event.target.value == "Sony Playstation 4"){

            Setchair(chair = "none")
            Setlaptop(laptop = "none")
            SetplayStation(playStation = "block")
            Setmonitor(monitor = "none")
            Setheadphones(headphones = "none")
            Setclock(clock="none")

        }
        else if(event.target.value == "Монитор" || event.target.value == "монитор" || event.target.value == "Acer" || event.target.value == "мон"
        || event.target.value == "МОНИТОР"){

            Setchair(chair = "none")
            Setlaptop(laptop = "none")
            SetplayStation(playStation = "none")
            Setmonitor(monitor = "block")
            Setheadphones(headphones = "none")
            Setclock(clock="none")

        }
        else if(event.target.value == "Беспроводные" || event.target.value == "беспроводные" || event.target.value == "наушники" 
        || event.target.value == "НАУШНИКИ" || event.target.value == "науш" || event.target.value == "Науш" || event.target.value == "AirPods"
        || event.target.value == "Apple" || event.target.value == "Apple AirPods"){

            Setchair(chair = "none")
            Setlaptop(laptop = "none")
            SetplayStation(playStation = "none")
            Setmonitor(monitor = "none")
            Setheadphones(headphones = "block")
            Setclock(clock="none")

        }
        else if(event.target.value == "Смарт" || event.target.value == "смарт" || event.target.value == "часы" || event.target.value == "Часы"
        || event.target.value == "Apple" || event.target.value == "Apple Watch" || event.target.value == "часы Apple Watch"){

            Setchair(chair = "none")
            Setlaptop(laptop = "none")
            SetplayStation(playStation = "none")
            Setmonitor(monitor = "none")
            Setheadphones(headphones = "none")
            Setclock(clock="block")

        }
        else if(event.target.value == ""){

            Setchair(chair = "block")
            Setlaptop(laptop = "block")
            SetplayStation(playStation = "block")
            Setmonitor(monitor = "block")
            Setheadphones(headphones = "block")
            Setclock(clock="block")

        }

    }
    let func = () => {
       if(props.Product.button.opacity == 0){

        props.CardBtn(props.Product)

       }
       else{
        props.CardBtn1(props.Product)
       }
        

    }

    return (

        <div>
            
            <div className="basic_block_Product">

            <div className="block_btn">
                <div>

                <button  onClick={func}>{props.Product.button.text}</button>

                </div>
                <h2>{props.Product.button.text1}</h2>
                <input style = {{opacity:props.Product.button.opacity}}  type="text" onInput={Search}/>
            </div>
            <div style = {{opacity:props.Product.button.opacity}} className="block_cards">
                <div className="block_products">
                    <div style = {{display:chair}} className="hide">

                    <CardProduct/>

                    </div>

                    <div style = {{display:laptop}}  className="hide">

                    <CardProduct1/>

                    </div>
                    <div style = {{display:playStation}} className = "hide">


                    <CardProduct2/>

                    </div>
                    
                    

                </div>
                <div className="block_products">
                    <div style = {{display:monitor}} className = "hide">

                    <CardProduct3/>

                    </div>
                    <div style = {{display:headphones}}  className = "hide">

                    <CardProduct4/>

                    </div>
                    <div style = {{display:clock}} className = "hide">


                    <CardProduct5/>

                    </div>
                    

                </div>
                    
            </div>

            </div>
        </div>

    )


}
export default connect(
    state => ({
        Product:state
    }),

    dispatch =>({
        CardBtn:(btn)=>{
            dispatch({type:"turn",payload:btn})
        },
        CardBtn1:(btn)=>{
            dispatch({type:"off",payload:btn})
        }


    })
)(Card);