import React from "react";

const Card = (props) => {
    // destructuring props, which is a JSX object containing name, email, hobby & id in that order we listed in "index.js"
    const {name, email, hobby, id} = props;
    return (
        <div>
            <img src={`https://robohash.org/${id}`} alt="robot"></img>
            <div>
                {/* every time Card component is called in the "index.js" file, it's properties(props) will be read and used here */}
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{hobby}</p>
            </div>
        </div>
    )
}

export default Card;