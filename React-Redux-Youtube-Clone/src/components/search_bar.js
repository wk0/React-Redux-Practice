import React, { Component } from 'react';

const styles = {
    searchBar : {
        'margin': '20px',
        'textAlign': 'center',
    },
    searchBarInput : {
        'width':'75%'
    }
}

class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = { term: 'Starting Value' };
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div style={styles.searchBar}>
                <input style={styles.searchBarInput} value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

}

export default SearchBar;