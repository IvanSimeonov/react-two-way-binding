import React, { Component } from "react";
import UserInput from "./shared/UserInput/UserInput";
const { default: UserOutput } = require("./shared/UserOutput/UserOutput");

class App extends Component {
  state = {
    name: "Petko",
    age: 25,
  };

  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>Two-Way Binding Example App</h1>
        </div>
        <div className="row">
          <UserInput
            changed={this.nameChangedHandler}
            value={this.state.name}
          ></UserInput>
        </div>
        <div className="row">
          <UserOutput name={this.state.name} age={this.state.age}></UserOutput> 
          <UserOutput name={this.state.name} age="14"></UserOutput> 
          <UserOutput name="Ivan"></UserOutput>
          <UserOutput name="Hristo" age="23"></UserOutput>
        </div>
      </div>
    );
  }
}

export default App;
