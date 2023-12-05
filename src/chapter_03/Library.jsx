import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="민준이책" numOfPage={300} />
            <Book name="예준이책" numOfPage={400} />
            <Book name="하준이책" numOfPage={500} />
        </div>
    )
}

export default Library;