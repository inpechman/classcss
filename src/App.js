import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            myStyle: {color: "black"},
            newStyle: {color: "red"},
            textForDiv: "text for div"
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        // this.state.myStyle = {color: "black"};
        // this.state.newStyle = {color: "red"};
        // this.state.textForDiv = "text for div";
    }

    // textForDiv = "text for div";
    // myStyle = {color: "black"};
    // newStyle = {color: "red"};
    onClickHandler() {
        this.setState({
            myStyle: this.state.newStyle,
            textForDiv: "new text for div"
        });
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>click to change div style</button>
                <p id="div1" style={this.state.myStyle}>{this.state.textForDiv}</p>
            </div>
        );
    }
}

export default App;
