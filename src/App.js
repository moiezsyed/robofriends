// Main Component (parent)

// notice here that we didn't mention "CardList.js"; because by default files without extensions are assumed to be JS files
import React from "react"
import CardList from "./CardList"
import Searchbox from "./Searchbox"
// multiple objects/functions can be imported by using curly braces
import {robots} from "./robots"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        };
    };

    // onChange is an event handler; where the events are input to the handler by means of a class method in this case
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event);
    };

    render() {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox change={this.onSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
        )
    };
}

export default App;

