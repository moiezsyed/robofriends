import React from "react"
import './Hello.css'

class Hello extends React.Component{
    render() {
        return (
            // using tachyons directly in the JS file, by using "className" and not "class", as this is a JSX format and not CSS
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                <p>React Ninja I Am</p>
            </div>
        );
    }
}

// export default keywords are used to export only one class or function at a time
export default Hello;