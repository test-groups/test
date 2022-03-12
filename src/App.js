import logo from './logo.svg';
import './App.css';
import React from "react";
import Welcome from "./welcome";

class App extends React.Component{
      constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/*<h1>你好</h1>*/}
                {/*<h1>你好</h1>*/}
                <Welcome name="123"/>
            </div>
            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <p>
            //             Edit <code>src/App.js</code> and save to reload.
            //         </p>
            //         <a
            //             className="App-link"
            //             href="https://reactjs.org"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             Learn React
            //         </a>
            //     </header>
            // </div>
        );
    }


}

export default App;
