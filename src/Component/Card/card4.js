import React from "react"
import {connect} from "react-redux"

let CardProduct = (props) => {

    return(

        <div>

<div className="Product_card">

<h2>{props.Product.product4.name}</h2>
<img src={props.Product.product4.img} alt="" />
<div className = "about_seller">

    <p>seller: {props.Product.product4.salesman}</p>
    <p>city: {props.Product.product4.city}</p>

</div>
<h4>{props.Product.product4.price} UAH</h4>


</div>

        </div>

    )


}
export default connect(
    state => ({
        Product: state
    }),
)(CardProduct);