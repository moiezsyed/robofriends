import React from "react";

const Card = (props) => {
    // destructuring props, which is a JSX object containing name, email, hobby & id properties
    // props gives us all the properties used in the component
    const {name, email, website, id} = props;
    return (
        // "dib" tachyon property is used to get the items inline, i.e. on one line
        <div className="bg-dark-purple ba b--transparent br3 grow ma2 measure tc pa3 small-caps calisto light-green hover-black shadow-hover contain dib">
            <img src={`https://robohash.org/${id}`} alt="robot"></img>
            <div>
                {/* every time Card component is called in the "index.js" file, it's properties(props) will be read and used here */}
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    )
}

export default Card;