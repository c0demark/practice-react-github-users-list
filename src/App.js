import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./user/CardList";
import SearchForm from "./user/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        // {
        //   name: "VIJAY KUMAR",
        //   avatar_url: "https://avatars2.githubusercontent.com/u/16079018?v=4",
        //   company: "Company Name here..."
        // },
        // {
        //   name: "Rajeev Kumar Singh",
        //   avatar_url: "https://avatars3.githubusercontent.com/u/8003566?v=4",
        //   company: "@directi"
        // }
      ]
    };
    // this.setState((prevState, props) => ({
    //   cards: [
    //     {
    //       name: "VIJAY KUMAR",
    //       avatarUrl: "https://avatars2.githubusercontent.com/u/16079018?v=4",
    //       company: "Company Name here..."
    //     },
    //     {
    //       name: "Rajeev Kumar Singh",
    //       avatarUrl: "https://avatars3.githubusercontent.com/u/8003566?v=4",
    //       company: "@directi"
    //     }
    //   ]
    // }));
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <SearchForm onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
  addNewCard = card => {
    console.log(card);
    this.setState(prevState => ({
      cards: prevState.cards.concat(card)
    }));
  };
}

export default App;
