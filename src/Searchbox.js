import React from "react"

const Searchbox = ({change}) => {
    return (
        <div className="pa1 ma2">
            {/* https://upmostly.com/tutorials/react-onchange-events-with-examples */}
            {/* onChange takes as input the event with all the events data such as name, value etc. */}
            <input className="bg-pink " type="search" placeholder="enter robot name" onChange={change}/>      
        </div>
    );
}

export default Searchbox;