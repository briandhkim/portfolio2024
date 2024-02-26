import { useEffect, useState } from 'react';
import './App.css';
import Landing from './component/pages/Landing';
import About from './component/pages/About';
import Experience from './component/pages/Experience';
import NavbarTw from './component/NavbarTw';
import Skills from './component/pages/Skills';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';

function App() {
    const [unlocked, setUnlocked] = useState(false);
    const [showLanding, setShowLanding] = useState(true);
    const [currentPage, setCurrentPage] = useState('Landing');

    useEffect(() => {
        if (unlocked) {
            const aboutSection = document.getElementById('About');
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                setShowLanding(false);
                // console.log('unlock');
            }, 800);
        }

        if (!unlocked) {
            setShowLanding(true);
        }
    }, [unlocked]);

    function navHandler(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(id);
    }

    return (
        <div className="App">
            {showLanding && (
                <Landing unlocked={unlocked} setUnlocked={setUnlocked} />
            )}
            {unlocked && (
                <>
                    <NavbarTw page={currentPage} navHandler={navHandler} />
                    <About setCurrentPage={setCurrentPage} />
                    <Experience setCurrentPage={setCurrentPage} />
                    <Skills setCurrentPage={setCurrentPage} />
                    <Contact setCurrentPage={setCurrentPage} />
                    <Footer navHandler={navHandler} />
                </>
            )}
        </div>
    );
}

export default App;
