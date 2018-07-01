import React, {Component} from 'react';
import ReactDom from 'react-dom'

// import Chess from './Chess.css';


class ChessOdeCell extends Component {
    cellStyle = {
        height: 80,
        width: 80,
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: "gray"
    };

    render() {
        return (
            <div style={this.cellStyle}>

            </div>
        )
    }
}

class ChessEvenCell extends Component {
    cellStyle = {
        height: 80,
        width: 80,
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: "white"
    };

    render() {
        return (
            <div style={this.cellStyle}>

            </div>
        )
    }
}

class ChessOdeRow extends Component {

    rowStyle = {
        display: "flex"
    };

    render() {
        return (
            <div style={this.rowStyle}>
                {Array(this.props.noCells).fill().map((x, i) => i % 2 ? <ChessOdeCell/> : <ChessEvenCell/>)}
            </div>
        )
    }
}

class ChessEvenRow extends Component {

    rowStyle = {
        display: "flex"
    };

    render() {
        return (
            <div style={this.rowStyle}>
                {Array(this.props.noCells).fill().map((x, i) => !(i % 2) ? <ChessOdeCell/> : <ChessEvenCell/>)}
            </div>
        )
    }
}


class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noRows: 8,
            noCols: 8
        }

        // this.selectHandler = this.selectHandler.bind(this)
    }

    selectHandler = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        let [x, y] = value.split("x").map((n) => parseInt(n));
        console.log(x, y);
        this.setState({
            noRows: x,
            noCols: y
        });

    };

    render() {
        let res = <div id="res1">
            <div>
                <select name="board-size" id="board-size-select" onChange={this.selectHandler}>
                    <option selected disabled value="">select board size</option>
                    <option value="4x4">4x4</option>
                    <option value="6x6">6x6</option>
                    <option value="8x8">8x8</option>
                    <option value="10x6">10x6</option>
                    <option value="8x12">8x12</option>
                    <option value="6x4">6x4</option>
                </select>
            </div>
            {Array(this.state.noRows).fill().map((x, i) => i % 2 ? <ChessOdeRow noCells={this.state.noCols}/> :
                <ChessEvenRow noCells={this.state.noCols}/>)}
        </div>;

        return (
            res
        )
    }
}

export default ChessBoard;