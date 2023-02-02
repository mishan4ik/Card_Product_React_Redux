let  initialState = {
    opacity:0,
    text:"Показать товар",
    text1:""

}
export default function Product(state = initialState,action){

    if(action.type === "turn"){

        return {
            opacity:1,
            text:"Спрятать товар",
            text1:"Искать товар"

        }

    }
    else if(action.type === "off"){

        return {
            opacity:0,
    text:"Показать товар",
    text1:""

        }

    }
    return state
}