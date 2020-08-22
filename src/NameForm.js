import React, { Component } from "react";
import nameList from "./NameList.js";
// import NameList from "./NameList";

class NameForm extends Component {
  state = { names: nameList };

  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    let name = event.target.children[0].value;
    this.setState(
      (prevState) => ({ names: [...prevState.names, name] }),
      () => console.log(this.state)
    );
  };

  handleClick = (event) => {
    event.persist();
    let filteredArray = this.state.names.filter(
      (name) => name !== event.target.innerText
    );
    this.setState({ names: filteredArray });
  };

  printNames() {
    return this.state.names.map((name) => (
      <li key={name.id}>
        {name} <button onClick={this.handleClick}>{name}</button>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" />
          <input type="submit" />
        </form>
        <ul>{this.printNames()}</ul>
        {/* <NameList /> */}
      </div>
    );
  }
}

export default NameForm;
//when the onSubmit function happens take that value and update the state

//   (prevState) => ({ names: [...prevState.names, name] }),
//   () => console.log()
// ); />
