import React, { Component } from 'react';
import './App.css';
import {getUrlPath} from '../src/utility/getUrlPath'
import Authors from './Authors'
import Books from './Books'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      authors: [],
    }
  }

  async getBooks() {
    const response = await fetch(getUrlPath('/books'))
    const data = await response.json()
    this.setState({
      books: data
    })
  }



  mapArray(array, attribute) {
    return array.map(element => {
      return <li key={element._id}>{element[attribute]}</li>
    })
  }

  render() {
    return (
      <div>
        <Authors />
        <Books />
      </div>
    );
  }

  componentDidMount() {
    this.getBooks()
  }
}

export default App;
