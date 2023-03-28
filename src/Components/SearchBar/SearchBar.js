import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(searchTerm){
        console.log(searchTerm);
        this.props.onSearch(searchTerm);
    }

    handleTermChange(e){
        this.setState({term: e.target.value});
    }

    render() {
        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <button className="SearchButton" onClick={(event) => {this.search(this.state.term)}}>SEARCH</button>
        </div>
        )
    }
}

export default SearchBar;