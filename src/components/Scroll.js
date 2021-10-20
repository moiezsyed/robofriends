import React from "react";

const Scroll = (props) => {
    // return the "CardList" component as "Scroll" wraps the "CardList" component
    return (
        // if we want to add styling directly in JSX, we need to use the attribute "style" and use twwo curly braces to access the object
        // without the height property, the scroll bar won't scroll/follow along
            <div style={{overflow: "scroll", border: "5px solid black", height: "800px"}}>
                {props.children}
            </div>
        );
}

export default Scroll;