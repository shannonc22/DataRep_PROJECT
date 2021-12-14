import React from "react";
import axios from 'axios';

// mark for export
export class UpdateBook extends React.Component {

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
            _id: this.state._id
        }

        //brings back response and passes up new movie
        axios.put('http://localhost:4000/api/books/' + this.state._id, newBook)
            .then((response) => { console.log(response) })
            .catch();


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

    //makes hhtps request and pulls back data - id identifies the book
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.Title,
                    Author: response.data.Author,
                    Genre: response.data.Genre,
                    ISBN10: response.data.ISBN10,
                    Publisher: response.data.Publisher,
                    PublicationDate: response.data.PublicationDate,
                    PageCount: response.data.PageCount,
                    Cover: response.data.Cover
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // updating title according to text input
    onChangeBookTitle(event) {
        this.setState({
            Title: event.target.value
        })
    }

    // updating Author according to text input
    onChangeBookAuthor(event) {
        this.setState({
            Author: event.target.value
        })
    }
    // updating Genre according to text input
    onChangeBookGenre(event) {
        this.setState({
            Genre: event.target.value
        })
    }
    // updating ISBN10 according to text input
    onChangeBookISBN10(event) {
        this.setState({
            ISBN10: event.target.value
        })
    }
    // updating Publisher according to text input
    onChangeBookPublisher(event) {
        this.setState({
            Publisher: event.target.value
        })
    }
    // updating PublicationDate according to text input
    onChangeBookPublicationDate(event) {
        this.setState({
            PublicationDate: event.target.value
        })
    }
    // updating PageCount according to text input
    onChangeBookPageCount(event) {
        this.setState({
            PageCount: event.target.value
        })
    }
    // updating Cover according to text input
    onChangeBookCover(event) {
        this.setState({
            Cover: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h4>Update Books</h4>

                {/* form with input */}
                <form onSubmit={this.onSubmit}>
                    {/* add book title */}
                    <div className="form-group">
                        <label>Update Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    {/* add book author */}
                    <div className="form-group">
                        <label>Update Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    {/* add book genre */}
                    <div className="form-group">
                        <label>Update Book Genre: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Genre}
                            onChange={this.onChangeBookGenre}
                        />
                    </div>
                    {/* add book ISBN10 */}
                    <div className="form-group">
                        <label>Update Book ISBN10: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ISBN10}
                            onChange={this.onChangeBookISBN10}
                        />
                    </div>
                    {/* add book Publisher */}
                    <div className="form-group">
                        <label>Update Book Publisher: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Publisher}
                            onChange={this.onChangeBookPublisher}
                        />
                    </div>
                    {/* add book Publication Date */}
                    <div className="form-group">
                        <label>Update Book Publication Date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PublicationDate}
                            onChange={this.onChangeBookPublicationDate}
                        />
                    </div>
                    {/* add book Page Count */}
                    <div className="form-group">
                        <label>Update Page Count : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PageCount}
                            onChange={this.onChangeBookPageCount}
                        />
                    </div>
                    {/* add book cover */}
                    <div className="form-group">
                        <label>Update Book Cover URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <br></br>
                    {/* submit button */}
                    <div>
                        <input type="submit" value="Update Book" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )

    }

}