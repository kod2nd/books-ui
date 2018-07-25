import React, { Component } from 'react';
import './App.css';
import getUrlPath from './getUrlPath'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  

  async getBooks() {
    const response = await fetch(getUrlPath('/books'))
    const data = await response.json()
    this.setState({
      books: data
    })
  }

  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getBooks()
  }
}

export default App;
