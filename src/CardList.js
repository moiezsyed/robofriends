import React from "react"
import Card from "./Card"

// NOTE: could directly destructure our "robots" prop inside the argument to directly access the array
const CardList = ({robots}) => {
    // use map method to loop over robots array (could also use forEach method)
    const cardComponent = robots.map((robot, index) => {
        // Card Component is called here (necessary to give exact names of props as used in the "Card" component)
        // "key" prop here is needed so that the virtual DOM recognizes each individual Card component from the other; without the "key" prop, the developer tool gives an error, and virtual DOM would have to erase everything if a Card component is deleted
        return (<Card key={index} name={robot.name} email={robot.email} hobby={robot.hobby} 
        id={robot.id} /> );
    })

    return(
        // only one return statement, so we don't need <div></div>
        // if wrapped in <div></div>, then we need to wrap cardComponent in curly braces, as JS object
        cardComponent
    );
}

export default CardList;