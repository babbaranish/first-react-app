import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList-components/CardList.component';
import SearchBox from './components/search-box/Search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }

  onchange = (event) => {
    this.setState(
      {
        searchField: event.target.value
      })
  }
  
  render() {
    const{monsters,searchField} = this.state;
    const searchedMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster search</h1>  
        <SearchBox
          placeholder="Search Monsters"
          handleSearch={this.onchange}
        />
        <CardList monsters={searchedMonsters}/>
      </div>
    );
  }
}

export default App;
