import React from "react"
import {connect} from "react-redux"

let CardProduct = (props) => {

    return(

        <div>

<div className="Product_card">

<h2>{props.Product.product.name}</h2>
<img src={props.Product.product.img} alt="" />
<div className = "about_seller">

    <p>seller: {props.Product.product.salesman}</p>
    <p>city: {props.Product.product.city}</p>

</div>
<h4>{props.Product.product.price} UAH</h4>


</div>

        </div>

    )


}
export default connect(
    state => ({
        Product: state
    }),
)(CardProduct);