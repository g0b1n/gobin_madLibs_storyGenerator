import React from "react";
import Forms from "./Forms";

const DisplayStory = ({ story }) => {
    // it will display nothing if there is no story
    if (!story) return null;

    return (
        <div>
            <p>{ story }</p>
        </div>
    )
}

export default DisplayStory;