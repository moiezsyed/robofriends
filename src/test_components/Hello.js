import React from "react"
import './Hello.css'

class Hello extends React.Component{
    render() {
        // return has to return one element, in this case "div"; which can contain other elements inside it
        return (
            // using tachyons directly in the JS file, by using "className" and not "class", as this is a JSX format and not CSS
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                {/* Accessing components property using the 'this.props' method */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

// export default keywords are used to export only one class or function at a time
export default Hello;