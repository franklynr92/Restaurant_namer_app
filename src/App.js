import React from "react";
import "./styles.css";
import NameForm from "./NameForm";
// import NameList from "./NameList";

//both functional components AND class components use props
//constructor is only part of class components
//the constructor was abstracted away in newer version of React

//why would we use a class component over functional?
//1. if we need to use state to hold information that will change and effect how our component looks
//2. component lifecycle methods

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Restaurant Name Putter App</h1>
        {/* <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" />
          <input type="submit" />
        </form> */}
        {/* <NameList /> */}
        <NameForm />
        {/* <ul>{this.printNames()}</ul> */}
      </div>
    );
  }
}

//Homework
//1. Turn the Form into a component called NameForm in a separate file
//2. Take the list of names and make it ITS own component in a separate file called NameList
//3. When a name is clicked on, it removed from the state and therefor the DOM

// constructor(props){
//   super(props)
//   this.state = {}
// }

// state = { names: ["Franklyn"] };

// handleSubmit = (event) => {
//   event.preventDefault();
//   event.persist();
//   let name = event.target.children[0].value;
//   this.setState(
//     (prevState) => ({ names: [...prevState.names, name] }),
//     () => console.log(this.state)
//   );
// };

// printNames() {
//   return this.state.names.map((name) => <li>{name}</li>);
// }
