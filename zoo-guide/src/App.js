import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
    console.log(this.state.count)
  }

  render() {
    return (
      <div className="App" onClick={this.handleIncrement}>
        <span>
          {this.countSec()}
        </span>
      </div>
    );
  }

  countSec() {
    const {count} = this.state;
    if (count > 0) {
      return <h1>ZOO GUIDE</h1>
    } else {
      return <img src='./img/lion.jpg' alt='lion'/>
    }
  }
}

export default App;
