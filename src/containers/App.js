// Main Component (parent)

// notice here that we didn't mention "CardList.js"; because by default files without extensions are assumed to be JS files
import React from "react"
import CardList from "./CardList"
import Searchbox from "./Searchbox"
import Scroll from "./Scroll"
import "./App.css"

// created class "App", which is parent class to all other component
// classes that have state are known as "smart components"
// smart components are the container of React, i.e. with life cycle hooks and state
// all other classes, in this case "Searchbox" and "CardList" communicate through this parent class
// "App" has states, which define our React code and are passed along to the child components as "props", i.e. all states can be used as props. It's like a binary tree structure, with the parent class ("App") being the root node
class App extends React.Component {
    constructor() {
        // takes in the constructor from the React.component class
        super()
        // describing the state of our React code (always done in the parent class, so the children can use it)
        this.state = {
            robots: [],
            searchfield: ''
        };
        console.log("constructor");
    };

    // onChange is an event handler; where the events are input to the handler by means of a class method in this case
    // in this case the event is to listen to the keyboard changes from the user; used in the "Searchbox" component using "onChange" attribute
    // always create methods in classes using the "arrow function" to avoid unnecesssary errors, except pre-defined React methods
    onSearchChange = (event) => {
        // setState changes the current state of the event to the new state that the user inputs
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    };

    componentDidMount() {
        console.log("componentDidMount");
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        fetch("https://jsonplaceholder.typicode.com/users")
            // we have to return the response in json format & the response is returned only when the "promise" is fulfilled
            .then(response => {
                // additional command to check for HTTP errors if any
                console.log(response.status);
                return response.json();
            })
            // we're getting users from the API by updating the state to the users from the API
            // if this is not done, we don't get the users
            .then(users => {
                this.setState({ robots: users })
            });
    }

    render() {
        console.log("render");
        // filter out the robots when searched for their names
        // this function links the two components
        const filteredRobot = this.state.robots.filter((robot) => {
            // when returns true, it will return that robot details
            // https://www.w3schools.com/jsref/jsref_includes.asp
            // https://www.w3schools.com/jsref/jsref_tolowercase.asp
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        // if-clause is used in the case it takes a while to fetch the response from the API
        if (this.state.robots.length === 0){
            return <h1 className="f1 light-green tc">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1 light-green"> RoboFriends</h1>
                    <Searchbox change={this.onSearchChange} />
                    <Scroll> 
                        <CardList filteredRobot={filteredRobot} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
