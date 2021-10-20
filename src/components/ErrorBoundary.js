import React from "react"

class ErrorBoundary extends React.Component{
    // we're passing in "props" to the constructor of this class, so that we could use the props in here
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    // error handling lifecycle hook
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render() {
        return(
            // the error will be displayed, but not in developer mode; only to the user screen
            // in developer mode, it will be only shown for a split second
            this.state.hasError ? <h1> Ooooopppps, I did it again!</h1> : this.props.children 
        );
    }
}


export default ErrorBoundary;