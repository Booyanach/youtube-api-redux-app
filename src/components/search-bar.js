import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return <div className="col-md-12 search-bar">
            <input type="text"
                   value={this.state.term}
                   onChange={event => this.onInputChange(event.target.value)}></input>
        </div>
    }

    onInputChange(term) {
        this.setState({ term });

        this.props.onSearchTermChange(term);
    }
}