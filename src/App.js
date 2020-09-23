import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import './App.css'
import {SearchBoxComponent} from "./components/searchbox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }

  onSearchInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchTerm} = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBoxComponent
          searchTerm={searchTerm}
          placeholder='search monsters'
          onSearchFn={this.onSearchInput}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
