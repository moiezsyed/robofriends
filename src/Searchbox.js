import React from "react"

const Searchbox = ({change}) => {
    return (
        <div className="pa1 ma2">
            {/* https://upmostly.com/tutorials/react-onchange-events-with-examples */}
            {/* onChange is an event handler; where the events are input to the handler by means of a class method in this case */}
            <input className="bg-pink " type="search" placeholder="enter robot name" onChange={change}/>      
        </div>
    );
}

export default Searchbox;