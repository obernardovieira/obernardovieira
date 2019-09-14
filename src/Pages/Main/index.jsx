import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import profile from '../../Assets/profile.jpg';
import twitterLogo from '../../Assets/twitter.svg';
import linkedinLogo from '../../Assets/linkedin.svg';
import githubLogo from '../../Assets/github.svg';
import envelope from '../../Assets/envelope.svg';
import layout from '../../Assets/layout.svg';
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
                    <h1 className="title is-1 my-title main-message">{hello}</h1>
                    <p className="secondary-message" >{me}</p>
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
                <div style={{ textAlign: 'center' }}>
                    <div className="working-on-title"><h1 className="title is-1 my-title">Have a look at what I've been working on</h1></div>
                </div>
                <div className="also">
                    <div>
                        <img className="article-img" src={layout} alt="layout" />
                        <div className="article-info">
                            <h4 className="title is-4">Hackathons</h4>
                            <span>I've been joinning and winning hackathons for a living. See the full list. You might have been in one already.</span>
                        </div>
                    </div>
                    <div>
                        <img className="article-img" src={layout} alt="layout" />
                        <div className="article-info">
                            <h4 className="title is-4">Articles</h4>
                            <span>Talk is cheap. I like to write, although tomorrow it might be deprecated, but still, I write. I think you will like it.</span>
                        </div>
                    </div>
                </div>
                <ReactTooltip />
            </div>
        );
    }
}

export default Main;