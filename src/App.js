import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
class App extends Component {

  state = {
    myInput: ''
  }
  inputChangeHandler = (event) =>{
      this.setState({myInput: event.target.value});
  }
  deleteHandler = (index) => {
    const inputText = this.state.myInput.split('');
    inputText.splice(index,1);
    this.setState({myInput: inputText.join('')});
  }
  render() {
    let charOutput = null;
    let charArray = this.state.myInput.split('');
    console.log(charArray);
    charOutput = (
      charArray.map((c, index) => {
        return <CharComponent char={c} key={index} deleter={() => this.deleteHandler(index)}/>
      })
    );
    return (
      <div className="App">
      <input type="text" onChange={this.inputChangeHandler} value={this.state.myInput}/>
      <ValidationComponent textLength={this.state.myInput.length}/>
      {charOutput}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length). Show the ValidationComponent in the App component</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>In the App component, render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.<br/>
            Hint: Use 'split' function to convert the text input into an array, then use the JavaScript 'map' function to output a CharComponent for each element in the array</li>
          <li>When you click a CharComponent, it should be removed from the entered text. <br/>
            Hint: Use 'split' function to convert the text input into an array, 'splice' function to remove element, and 'join' function to turn back into a string</li>
        </ol>
      </div>
    );
  }
}

export default App;
