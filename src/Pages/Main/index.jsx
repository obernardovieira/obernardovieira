import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import profile from '../../Assets/profile.jpg';
import twitterLogo from '../../Assets/twitter.svg';
import linkedinLogo from '../../Assets/linkedin.svg';
import githubLogo from '../../Assets/github.svg';
import envelope from '../../Assets/envelope.svg';
import messages from './messages.json';
import './index.css';


class Main extends Component {

    /**
     * @ignore
     */
    render() {
        const { hello, me, also } = messages;
        return (
            <div className="main-content">
                <div className="grey-box" />
                <div style={{ float: 'right' }}>
                    <img className="picture" src={profile} alt="obernardovieira profile" />
                </div>
                <div className="text-content">
                    <h1 className="title is-1">{hello}</h1>
                    <p style={{ padding: '50px' }}>{me}</p>
                    <div className="social-media">
                        <a href="https://twitter.com/obernardovieira">
                            <img data-tip="Find me on Twitter" className="social-logo" src={twitterLogo} alt="twitter logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/obernardovieira/">
                            <img data-tip="Find me on LinkedIn" className="social-logo" src={linkedinLogo} alt="linkedin logo" />
                        </a>
                        <a href="https://github.com/obernardovieira">
                            <img data-tip="Find me on GitHub" className="social-logo" src={githubLogo} alt="github logo" />
                        </a>
                        <a href="mailto:bernardo@techhq.io">
                            <img data-tip="Send me an Email" className="social-logo" src={envelope} alt="envelope logo" />
                        </a>
                    </div>
                </div>
                <div className="also">{also}</div>
                <ReactTooltip />
            </div>
        );
    }
}

export default Main;