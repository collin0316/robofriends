import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="tc pa3 ba b--blue bg-light-blue"
                type="search"
                placeholder="Search for robots:"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;