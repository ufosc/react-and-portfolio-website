import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants';


const SideLinks = () => {
    return <div className="position-sticky bottom-0 start-0 d-flex flex-column gap-3 z-1 ms-2 ">
          {GITHUB_URL && <a href={GITHUB_URL} target="_blank" rel="noreferrer" class="btn btn-primary rounded-pill" style={{width: 42}} ><FontAwesomeIcon icon={ faGithub } /></a>}
          {TWITTER_URL && <a href={TWITTER_URL} target="_blank" rel="noreferrer" class="btn btn-primary rounded-pill" style={{width: 42}}><FontAwesomeIcon icon={ faTwitter } /></a>}
          {LINKEDIN_URL && <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" class="btn btn-primary rounded-pill" style={{width: 42}}><FontAwesomeIcon icon={ faLinkedin } /></a>}
    </div>
};

export default SideLinks;
