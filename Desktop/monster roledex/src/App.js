import React from "react";
import { CardList } from "./components/card-list/card-list.components";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const filteredMonsters = this.searchFilter();
    return (
      <div className="App">
        <h1>Monster Searcher</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange()}
        />
         <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  handleChange() {
    return (e) => this.setState({ searchField: e.target.value });
  }

  searchFilter() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return filteredMonsters;
  }
}
