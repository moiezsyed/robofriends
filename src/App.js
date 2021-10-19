// Main Component (parent)

// notice here that we didn't mention "CardList.js"; because by default files without extensions are assumed to be JS files
import React from "react"
import CardList from "./CardList"
import Searchbox from "./Searchbox"
// multiple objects/functions can be imported by using curly braces
import {robots} from "./robots"

// created class "App", which is parent class to all other component
// all other classes, in this case "Searchbox" and "CardList" communicate through this parent class
// "App" has states, which define our React code and are passed along to the child components as "props", i.e. all states can be used as props. It's like a binary tree structure, with the parent class ("App") being the root node
class App extends React.Component{
    constructor() {
        // takes in the constructor from the React.component class
        super()
        // describing the state of our React code (always done in the parent class, so the children can use it)
        this.state = {
            robots: robots,
            searchfield: ''
        };
    };

    // onChange is an event handler; where the events are input to the handler by means of a class method in this case
    // in this case the event is to listen to the keyboard changes from the user; used in the "Searchbox" component using "onChange" attribute
    // always create methods in classes using the "arrow function" to avoid unnecesssary errors
    onSearchChange = (event) => {
        // setState changes the current state of the event to the new state that the user inputs
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
    };

    render() {
        // filter out the robots when searched for their names
        const filteredRobot = this.state.robots.filter((robot) => {
            // when returns true, it will return that robot details
            // https://www.w3schools.com/jsref/jsref_includes.asp
            // https://www.w3schools.com/jsref/jsref_tolowercase.asp
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox change={this.onSearchChange}/>
                <CardList robots={filteredRobot} />
            </div>
        )
    };
}

export default App;

