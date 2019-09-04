import React, { Component } from 'react';
import profile from '../../Assets/profile.jpg';
import twitterLogo from '../../Assets/twitter.svg';
import linkedinLogo from '../../Assets/linkedin.svg';
import githubLogo from '../../Assets/github.svg';
import envelope from '../../Assets/envelope.svg';
import './index.css';


class Main extends Component {
    state = {
        hello: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sollicitudin arcu.',
        me: 'Vivamus elementum lectus pharetra ligula egestas, ut vestibulum magna ullamcorper. Quisque nec nisi in nulla molestie interdum. Vestibulum id semper odio. Vestibulum quam mauris, sagittis id hendrerit ut, aliquam lacinia orci. Fusce laoreet blandit erat, vel congue purus sagittis nec.',
    }

    /**
     * @ignore
     */
    render() {
        const { hello, me } = this.state;
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
            </div>
        );
    }
}

export default Main;