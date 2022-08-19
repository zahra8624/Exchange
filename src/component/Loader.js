import React from 'react';
import spinner from "../gifs/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src = {spinner} alt = "Loading"/>
            <h3>Loading ...</h3>
            
        </div>
    );
};

export default Loader;