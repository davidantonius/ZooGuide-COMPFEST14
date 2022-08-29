import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div className="App" onClick={this.handleIncrement}>
        <span>{this.countSec()}</span>
      </div>
    );
  }

  countSec() {
    const { count } = this.state;
    if (count === 0) {
      return <img src="./img/lion.jpg" alt="lion" />;
    } else if (count === 1) {
      return <h1>ZOO GUIDE</h1>;
    } else {
      return (
        <div>
          <h2>Siapa Nama Kamu?</h2>
          <input type="text"></input>
          <br></br>
          <a href="main" class="button">
            Lanjut
          </a>
        </div>
      );
    }
  }
}

export default App;
