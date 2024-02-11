import { useState } from 'react';
import './App.css';
import Landing from './component/Landing';
import About from './component/About';

function App() {
    const [unlocked, setUnlocked] = useState(false);

    return (
        <div className="App">
            <Landing unlocked={unlocked} setUnlocked={setUnlocked} />
            <About />
        </div>
    );
}

export default App;
