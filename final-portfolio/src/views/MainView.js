import React from 'react';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Employment from './Employment/Employment';

import './mainview.scss';
import Education from './Education/Education';

const MainView = () => {
    return (
        <div className="text-white mainview">
            <div className="min-vw-100 min-vh-100" id="home">
                <Home />
            </div>
            <div className="" style={{minWidth: '80vw', minHeight: '80vh'}} id="skills">
                <Skills />
            </div>
            <div className="min-vw-100 min-vh-100" id="education">
                <Education />
            </div>
            <div className="min-vw-100 min-vh-100" id="experience">
                <Employment />
            </div>
            <div className="min-vw-100 min-vh-100" id="projects">
                <Projects />
            </div>
        </div>
    )
}

export default MainView;
