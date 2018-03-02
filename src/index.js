import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY =  'AIzaSyA4xjOemPW613rv9BeAacNKGgWXnmOTuNQ';

// Create a new component, produce new HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}


// Put component's generated HTML into DOM
ReactDOM.render(<App/>, document.querySelector('.container'));