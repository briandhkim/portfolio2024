import { useEffect, useState } from 'react';
import './App.css';
import Landing from './component/Landing';
import About from './component/About';
import MainWrapper from './component/MainWrapper';
import Experience from './component/Experience';
import NavbarTw from './component/NavbarTw';

function App() {
    const [unlocked, setUnlocked] = useState(false);
    const [showLanding, setShowLanding] = useState(true);
    const [currentPage, setCurrentPage] = useState('Landing');

    useEffect(() => {
        if (unlocked) {
            const aboutSection = document.getElementById('About');
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                // console.log(window.scrollY, aboutSection.offsetTop);
                if (window.scrollY === aboutSection.offsetTop) {
                    setShowLanding(false);
                    // console.log('unlock');
                }
            }, 800);
        }

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
                    {/* <Navbar /> */}
                    <NavbarTw page={currentPage} />
                    <About setCurrentPage={setCurrentPage} />
                    <Experience setCurrentPage={setCurrentPage} />
                </>
            )}
            {/* <About /> */}
        </div>
    );
}

export default App;
