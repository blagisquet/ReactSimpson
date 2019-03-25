import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const working = this.state.on ? 'Homer is working' : 'Homers is not working';
    const logo2 = this.state.working ? "App-logo" : "App-logo2";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logo2} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <button 
        onClick={this.handleClick}
        className="App-logo-spin-speed"
        >
        {working.toUpperCase()}
       
        </button>
       
      
  
        {Quotes.map(quote => ( 
          <Quote quote={quote.quote} image={quote.image} character={quote.character} />
    ))}
    
      </div>
      
    );
  }
}


export default App;