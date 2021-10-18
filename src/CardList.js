import React from "react"
import Card from "./Card"

// NOTE: could directly destructure our "robots" prop inside the argument to directly access the array
const CardList = (props) => {
    const robots = props.robots;
    // use map method to loop over robots array (could also use forEach method)
    const cardComponent = robots.map((robot, index) => {
        // Card Component is called here (necessary to give exact names of props as used in the "Card" component)
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