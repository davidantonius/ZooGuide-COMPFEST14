import { Component } from "react";
import Navbar from "./Navbar";
import Camera from "./Camera";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    inputValue: "",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div
        className={this.state.count < 3 ? "WithBackground" : "NoBackground"}
        onClick={this.state.count < 2 ? this.handleIncrement : () => {}}
      >
        <span>{this.countClick()}</span>
      </div>
    );
  }

  updateInputValue = (evt) => {
    const val = evt.target.value;
    this.state.inputValue = val;

    console.log(this.state.inputValue);
  };

  countClick() {
    const { count } = this.state;
    if (count === 0) {
      return <img className="logo" src="./img/lion.jpg" alt="lion" />;
    } else if (count === 1) {
      return <h1>ZOO GUIDE</h1>;
    } else if (count === 2) {
      return (
        <div>
          <h2>Siapa Nama Kamu?</h2>
          <input
            type="text"
            onChange={(evt) => this.updateInputValue(evt)}
          ></input>
          <br></br>
          <button onClick={this.handleIncrement}>Lanjut</button>
        </div>
      );
    } else if (count === 3) {
      return (
        <>
          <Navbar propName={this.state.inputValue} />
          <button onClick={this.handleIncrement}>Zoo Camera</button>
        </>
      );
    } else {
      return (
        <>
          <Navbar propName={this.state.inputValue} />
          <Camera />
        </>
      );
    }
  }
}

export default App;
