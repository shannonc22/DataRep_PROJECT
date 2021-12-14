import React from "react";

// mark for export
export class Home extends React.Component {




    render() {
        return (
            <div>
                <h1>Welcome to the Book Tracking App!</h1>
                <br></br>
                <h2>Keep Track of all the books you wish to read</h2>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ck7ehQMbHxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <br></br>
                <br></br>
                {/* displays current time */}
                <h4>The current time is: {new Date().toLocaleTimeString()}.</h4>

            </div>

        );

    }
}
