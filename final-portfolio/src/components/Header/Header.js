import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import profile from '../../assets/Albert_and_Alberta.jpg';
import { FULL_NAME } from '../../constants';

import './Header.scss';

const Header = () => {
    const navLinks = [
        { id: "#home", text: "About" },
        { id: "#skills", text: "Skills" },
        { id: "#education", text: "Education" },
        { id: "#experience", text: "Experience" },
        { id: "#projects", text: "Projects" }
    ]

    const navLinkToElement = ({ id, text }) => {
        return <li className="nav-item" key={`nav-li-${id}`}>
            <a className="nav-link" href={id}>
                {text}
            </a>
        </li>
    }

    return (
        <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="#home"
                >
                    <img src={profile} className="nav-circle me-2" alt="Small profile icon" />
                    <h2 className="d-inline-block">{FULL_NAME}</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {navLinks.map(navLinkToElement)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
