import { useState, useEffect } from "react";
import GetData from "./components/GetData";

function App() {

    const [query, setQuery] = useState(false);

    const handleClick = () => {
        setQuery(!query)
    };

    // const {loading, error, data} = GetData(query);

    const [counter, setCounter] = useState(0);


    return (
        <div className="container">

            <div className="products">

            </div>

            <div className="cart">

            </div>

            {/* <div>
                <button onClick={handleClick}>get data</button>
            </div>

            <div>{loading && "loading...."}</div> */}



        </div>
    );
}

export default App;
