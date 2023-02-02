import React from "react"
import {connect} from "react-redux"
import "./card1.css"

let CardProduct = (props) => {

    return(

        <div>

<div className="Product_card">

                            <h2>{props.Product.product1.name}</h2>
                            <div className="img_laptop">

                            <img src={props.Product.product1.img} alt="" />

                            </div>
                            
                            <div className = "about_seller">

                                <p>seller: {props.Product.product1.salesman}</p>
                                <p>city: {props.Product.product1.city}</p>

                            </div>
                            <h4>{props.Product.product1.price} UAH</h4>


                    </div>


        </div>

    )


}
export default connect(
    state => ({
        Product: state
    }),
)(CardProduct);