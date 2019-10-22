import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLive : false,
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState(() => {
      return {
        isLive: !this.state.isLive,

      }
    })
  }

  render() {
    var gridArr = [];
    for (let r = 0; r < 15; r++) {
      for (let c = 0; c < 15; c++) {
        let cellId = r + '-' + c;
        gridArr.push (
          <Cell key={cellId}
          onClick={this.handleOnClick}
           />
          // <div key={cellId} onClick={this.handleOnClick} className={this.state.isLive ? "cell live" : "cell"} ></div>
        )
        
      }
      
    }
    return (
      <div className="App">
        {/* <div onClick={this.handleOnClick} className={this.state.isLive ? "cell live" : "cell"} ></div> */}
        {gridArr}
      </div>
    );
  }
}

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // cols: Array(15).fill(false)
    }
  }

  render() {
    return (
      <div className="cell"></div>
    );
  }


}



export default App;
