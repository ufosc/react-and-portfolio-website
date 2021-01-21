import React from 'react';
import profile from '../../assets/Albert_and_Alberta.jpg'

import {FULL_NAME} from '../../constants';

import './Home.scss';

const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center mx-auto w-75">
            <div className="content mt-4">
                    <img src={profile} className="profile" alt="Main profile" />
                    <h2 className="bg-primary fw-bold display-6 p-3 text-center" style={{zIndex: 1, transform: 'translate(0, -70%)'}}>{FULL_NAME}</h2>
                    <p className="bg-dark w-75 py-5 text-center d-flex align-items-center justify-content-center" style={{transform: 'translate(0, -50%)', height: 250}}><span className="mt-2">My name is Al E. Gator and I'm currently still building this website!</span></p>
            </div>
        </div>
    )
}

export default Home;
