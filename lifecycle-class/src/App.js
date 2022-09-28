import { useState } from 'react';
import Counter from './Counter.js';
// import logo from './logo.svg';
// import './App.css';

const fakeUser = {
    userId: 10,
    name: 'John Brain',
    email: 'john.brain@gmail.com'
}
function App() {
    const [mount, setMout] = useState(false)
    const [userId, setUserId] = useState(0)
    
    const changeUserId = () => {
        setUserId(Math.floor(Math.random() * 100))
    }

    const handleMount = () => {
        setMout(!mount)
    }

    return (
        <div className="App">
            <button onClick={handleMount}>{!mount ? 'mount': 'unMount'}</button>
            <button onClick={changeUserId}>change userId</button>
            <div>
                {mount ? <Counter userId={userId} /> : null}
            </div>
        </div>
    );
}

export default App;
