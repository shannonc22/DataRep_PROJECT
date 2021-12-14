import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// mark for export
export class BookItem extends React.Component {

    constructor() {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    // deletes book id
    DeleteBook(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.book._id);
        //reloads page after deleting book so you don't have to refresh page
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    //displays book details in a card
    render() {
        return (
            <div class="card">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{this.props.book.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.Cover} alt="Book Cover Art" width="200" height="250"></img>
                            <footer className="blockquote-footer">
                                <br></br>
                                {this.props.book.Author}
                                <br></br>
                                {this.props.book.Genre}
                                <br></br>
                                {this.props.book.ISBN10}
                                <br></br>
                                {this.props.book.Publisher}
                                <br></br>
                                {this.props.book.PublicationDate}
                                <br></br>
                                {this.props.book.PageCount}
                                <br></br>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* update button brings you to update page to edit details of the book */}
                    <Link to={"/updateBook/" + this.props.book._id} className="btn btn-primary">Update</Link>
                    <br></br>
                    {/* delete button deletes book */}
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>

        );

    }
}
