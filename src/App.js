import { useState } from 'react';
import './App.css';
import Landing from './component/Landing';

function App() {
    const [unlocked, setUnlocked] = useState(false);

    return (
        <div className="App">
            <Landing unlocked={unlocked} setUnlocked={setUnlocked} />
        </div>
    );
}

export default App;
