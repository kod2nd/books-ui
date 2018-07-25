import React, { Component } from 'react';
import { getUrlPath } from '../src/utility/getUrlPath'

class Books extends Component {
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

    mapArray(array, attribute) {
        return array.map(element => {
            return <li key={element._id}>{element[attribute]}</li>
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Books</h2>
                    {this.mapArray(this.state.books, "title")}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getBooks()
    }
}

export default Books;
