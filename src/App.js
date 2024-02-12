import { useEffect, useState } from 'react';
import './App.css';
import Landing from './component/Landing';
import About from './component/About';
import MainWrapper from './component/MainWrapper';
import Navbar from './component/Navbar';
import Timeline from './component/Timeline';

function App() {
    const [unlocked, setUnlocked] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(() => {
        if (unlocked) {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                if (window.scrollY === aboutSection.offsetTop) {
                    // setShowLanding(false);
                    console.log('unlock');
                }
            }, 800);
        }
    }, [unlocked]);

    useEffect(() => {
        if (!unlocked) {
            setShowLanding(true);
        }
    }, [unlocked]);

    return (
        <div className="App">
            {showLanding && (
                <Landing unlocked={unlocked} setUnlocked={setUnlocked} />
            )}
            {/* {unlocked && <MainWrapper />} */}
            {unlocked && (
                <>
                    <Navbar />
                    <About />
                    <Timeline />
                </>
            )}
            {/* <About /> */}
        </div>
    );
}

export default App;
