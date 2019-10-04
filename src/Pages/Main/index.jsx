import React, { Component } from 'react';

import profile from '../../Assets/profile.jpg';
import twitterLogo from '../../Assets/twitter.svg';
import linkedinLogo from '../../Assets/linkedin.svg';
import githubLogo from '../../Assets/github.svg';
import envelope from '../../Assets/envelope.svg';
import writer from '../../Assets/writer.svg';
import hacker from '../../Assets/hacker.svg';
import messages from './messages.json';
import './index.css';


class Main extends Component {

    sendHackathons = (event) => {
        window.location.href = 'https://gist.github.com/obernardovieira/f4ec9b75736a98be5f6198f5ae40b897';
        event.preventDefault();
    }

    sendArticles = (event) => {
        window.location.href = 'https://www.linkedin.com/in/obernardovieira/detail/recent-activity/posts/';
        event.preventDefault();
    }

    /**
     * @ignore
     */
    render() {
        const { hello, me } = messages;
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
                            <img className="social-logo" src={twitterLogo} alt="twitter logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/obernardovieira/">
                            <img className="social-logo" src={linkedinLogo} alt="linkedin logo" />
                        </a>
                        <a href="https://github.com/obernardovieira">
                            <img className="social-logo" src={githubLogo} alt="github logo" />
                        </a>
                        <a href="mailto:bernardo@techhq.io">
                            <img className="social-logo" src={envelope} alt="envelope logo" />
                        </a>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div className="working-on-title"><h1 className="title is-1 my-title">Have a look at what I've been working on</h1></div>
                </div>
                <div className="also">
                    <div onClick={this.sendHackathons}>
                        <img className="article-img" src={hacker} alt="layout" />
                        <div className="article-info">
                            <h4 className="title is-4">Hackathons</h4>
                            <span>I've been joinning and winning hackathons for a living. See the full list. You might have been in one already.</span>
                        </div>
                    </div>
                    <div onClick={this.sendArticles}>
                        <img className="article-img" src={writer} alt="layout" />
                        <div className="article-info">
                            <h4 className="title is-4">Articles</h4>
                            <span>Talk is cheap. I like to write, although tomorrow it might be deprecated, but still, I write. I think you will like it.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;