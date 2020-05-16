import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RecommendedFriends from "./components/RecommendFriends.js";
import FollowFriendListItem from "./components/FollowFriendListItem.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecommendedFriends friends={[
            {name: "hung0129", src:"https://loremflickr.com/50/50"},
            {name: "hung0129", src:"https://loremflickr.com/50/50"},
            {name: "hung0129", src:"https://loremflickr.com/50/50"}
          ]} />
      </div>
    );
  }
}

export default App;
