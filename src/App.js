import { useEffect, useState } from 'react';
import './App.css';
import Landing from './component/pages/Landing';
import About from './component/pages/About';
import MainWrapper from './component/MainWrapper';
import Experience from './component/pages/Experience';
import NavbarTw from './component/NavbarTw';
import Skills from './component/pages/Skills';

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
                    <Skills setCurrentPage={setCurrentPage} />
                </>
            )}
            {/* <About /> */}
        </div>
    );
}

export default App;
