import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componants/header";
import Search from "./componants/search";
import Results from "./componants/results";
import Saved from "./componants/saved";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Panel heading="Search">
          < Search
              handleInputChange={this.handleChange}
              handleFormSubmit={this.handleSubmit}
          />
       </Panel>
        <Search/>
        <Results/>
        <Saved/>
      </div>
    );
  }
}

export default App;
