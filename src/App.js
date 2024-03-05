import { useEffect, useState } from 'react';
import './App.css';
import Landing from './component/pages/Landing';
import About from './component/pages/About';
import Experience from './component/pages/Experience';
import NavbarTw from './component/NavbarTw';
import Skills from './component/pages/Skills';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';
import { scroller } from 'react-scroll';

function App() {
    const [unlocked, setUnlocked] = useState(false);
    const [showLanding, setShowLanding] = useState(true);
    const [currentPage, setCurrentPage] = useState('Landing');
    const [themeData, setThemeData] = useState(
        JSON.parse(localStorage.getItem('bdhk_theme')) || {
            isDarkMode: false,
            currentTheme: 'retro',
    });

    useEffect(() => {
        if (unlocked) {
            const aboutSection = document.getElementById('About');
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                setShowLanding(false);
            }, 800);
        }

        if (!unlocked) {
            setShowLanding(true);
        }
    }, [unlocked]);

    useEffect(() => {
        localStorage.setItem('bdhk_theme', JSON.stringify(themeData));
    }, [themeData]);

    useEffect(() => {
        document
            .getElementsByTagName('html')[0]
            .setAttribute('data-theme', themeData.currentTheme);

        const root = document.getElementById('root');
        if (themeData.isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    function navHandler(id) {
        // document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        scroller.scrollTo(id, {
            duration: 500,
            smooth: true,
        });
    }

    return (
        <div className="App">
            {showLanding && (
                <Landing unlocked={unlocked} setUnlocked={setUnlocked} />
            )}
            {unlocked && (
                <>
                    <NavbarTw
                        page={currentPage}
                        navHandler={navHandler}
                        themeData={themeData}
                        setThemeData={setThemeData}
                    />
                    <About
                        setCurrentPage={setCurrentPage}
                        themeData={themeData}
                    />
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
