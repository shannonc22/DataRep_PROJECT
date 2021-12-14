import React, { Component } from "react";
import axios from 'axios';


// mark for export
export class addBooks extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
        this.onChangeBookISBN10 = this.onChangeBookISBN10.bind(this);
        this.onChangeBookPublisher = this.onChangeBookPublisher.bind(this);
        this.onChangeBookPublicationDate = this.onChangeBookPublicationDate.bind(this);
        this.onChangeBookPageCount = this.onChangeBookPageCount.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);

        // define title, year, poster
        this.state = {
            Title: '',
            Author: '',
            Genre: '',
            ISBN10: '',
            Publisher: '',
            PublicationDate: '',
            PageCount: '',
            Cover: ''
        }
    }


    // handleSubmit function
    onSubmit(event) {
        console.log("Title: " + this.state.Title +
            " Author: " + this.state.Author +
            " Genre: " + this.state.Genre +
            " ISBN10: " + this.state.ISBN10 +
            " Publisher: " + this.state.Publisher +
            " PublicationDate: " + this.state.PublicationDate +
            " PageCount: " + this.state.PageCount +
            " Cover: " + this.state.Cover);

        const newBook = {
            Title: this.state.Title,
            Author: this.state.Author,
            Genre: this.state.Genre,
            ISBN10: this.state.ISBN10,
            Publisher: this.state.Publisher,
            PublicationDate: this.state.PublicationDate,
            PageCount: this.state.PageCount,
            Cover: this.state.Cover,
        }
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        event.preventDefault();
        this.setState({
            Title: '',
            Author: '',
            Genre: '',
            ISBN10: '',
            Publisher: '',
            PublicationDate: '',
            PageCount: '',
            Cover: ''
        });


    }

    // updating title according to text input
    onChangeBookTitle(event) {
        this.setState({
            Title: event.target.value
        })
    }

    // updating Year according to text input
    onChangeBookAuthor(event) {
        this.setState({
            Author: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookGenre(event) {
        this.setState({
            Genre: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookISBN10(event) {
        this.setState({
            ISBN10: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookPublisher(event) {
        this.setState({
            Publisher: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookPublicationDate(event) {
        this.setState({
            PublicationDate: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookPageCount(event) {
        this.setState({
            PageCount: event.target.value
        })
    }
    // updating Poster according to text input
    onChangeBookCover(event) {
        this.setState({
            Cover: event.target.value
        })
    }
    render() {
        return (
            <div>
                {/* form with input */}
                <h1>Add a book to your To Be Read List</h1>
                <form onSubmit={this.onSubmit}>
                    {/* add book title */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    {/* add book author */}
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    {/* add book genre */}
                    <div className="form-group">
                        <label>Add Book Genre: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Genre}
                            onChange={this.onChangeBookGenre}
                        />
                    </div>
                    {/* add book ISBN10 */}
                    <div className="form-group">
                        <label>Add Book ISBN10: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ISBN10}
                            onChange={this.onChangeBookISBN10}
                        />
                    </div>
                    {/* add book Publisher */}
                    <div className="form-group">
                        <label>Add Book Publisher: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Publisher}
                            onChange={this.onChangeBookPublisher}
                        />
                    </div>
                    {/* add book Publication Date */}
                    <div className="form-group">
                        <label>Add Book Publication Date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PublicationDate}
                            onChange={this.onChangeBookPublicationDate}
                        />
                    </div>
                    {/* add book Page Count */}
                    <div className="form-group">
                        <label>Add Page Count : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PageCount}
                            onChange={this.onChangeBookPageCount}
                        />
                    </div>
                    {/* add book cover */}
                    <div className="form-group">
                        <label>Add Book Cover URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <br></br>
                    {/* submit button */}
                    <div>
                        <input type="submit" value="Add Book" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )

    }

}