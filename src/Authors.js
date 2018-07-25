import React, { Component } from 'react';
import { getUrlPath } from '../src/utility/getUrlPath'

class Authors extends Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }

    async getAuthors() {
        const response = await fetch(getUrlPath('/authors'))
        const data = await response.json()
        this.setState({
            authors: data
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
                    <h2>Authors</h2>
                    {this.mapArray(this.state.authors, "name")}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getAuthors()
    }
}

export default Authors;
