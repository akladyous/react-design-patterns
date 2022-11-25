import './App.css';
import { useState } from 'react';
import UseBooks from './UseBooks';

function App() {

    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }
    
    const { loading,
            error, 
            books, 
            haseMore
    } = UseBooks(query, pageNumber)

    return (
    <div>
        <input type="text" onChange={handleSearch} />
        <hr />
        <div>{
                books.map(book => 
                    <div key={book}>{book}</div>
                )
            }
        </div>
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error!!"}</div>
    </div>
    );
}

export default App;
