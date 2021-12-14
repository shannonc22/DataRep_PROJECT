import React from "react";
import { BookItem } from "./bookItem";

// mark for export
export class Books extends React.Component {


    render() {
        return this.props.books.map((book) => {
            //embeds book item component - passing reload data down the component stack so page reloads after deleting
            return <BookItem book={book} ReloadData={this.props.ReloadData}></BookItem>
        })

    }
}
