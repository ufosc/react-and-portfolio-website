import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/js/bootstrap.js';
import './index.scss';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import MainView from './views/MainView.js';
import SideLinks from './components/SideLinks/SideLinks';

const mainContent = (
    <React.StrictMode>
        <Header />
        <MainView />
        <SideLinks />
        <Footer />
    </React.StrictMode>
);

ReactDOM.render(mainContent, document.getElementById('root'));
