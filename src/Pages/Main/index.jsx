import React, { Component } from 'react';
import profile from '../../Assets/profile.jpg';
import twitterLogo from '../../Assets/twitter.svg';
import './index.css';


class Main extends Component {

    /**
     * @ignore
     */
    render() {
        return (
            <div className="main-content">
                <div className="grey-box" />
                <div style={{ float: 'right' }}>
                    <img className="picture" src={profile} alt="profile" />
                </div>
                <div className="text-content">
                    <h1 className="title is-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sollicitudin arcu.</h1>
                    <p style={{ padding: '50px' }}>Vivamus elementum lectus pharetra ligula egestas, ut vestibulum magna ullamcorper. Quisque nec nisi in nulla molestie interdum. Vestibulum id semper odio. Vestibulum quam mauris, sagittis id hendrerit ut, aliquam lacinia orci. Fusce laoreet blandit erat, vel congue purus sagittis nec.</p>
                    <div className="social-media">
                        <a href="www.twitter.com">
                            <img className="social-logo" src={twitterLogo} alt="twitter logo" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;