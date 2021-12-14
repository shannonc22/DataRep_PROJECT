import React from "react";
import { Books } from "./books";
import axios from 'axios';

// mark for export
export class ToBeRead extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/books')
            // callback function
            .then((response) => {
                this.setState({ books: response.data })
            })
            //if error occurs log to console
            .catch((error) => {
                console.log(error);
            });

    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    this.setState({ books: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    // book data
    state = {
        books: []
    };

    render() {
        return (
            <div>
                <h1>To Be Read List</h1>
                <br></br>
                {/* passing reload data down the component stack so page reloads after deleting book */}
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books>
            </div>
        );
    }
}