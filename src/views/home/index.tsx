import React, { Component } from 'react';

import portfolio1 from './img/portfolio/1.jpg';
import portfolio2 from './img/portfolio/2.jpg';
import portfolio3 from './img/portfolio/3.jpg';
import portfolio4 from './img/portfolio/4.jpg';
import portfolio5 from './img/portfolio/5.jpg';
import portfolio6 from './img/portfolio/6.jpg';
import portfolio7 from './img/portfolio/7.jpg';
import portfolio8 from './img/portfolio/8.jpg';


class Home extends Component {

    public sendHackathons = (event: any) => {
        window.location.href = 'https://gist.github.com/obernardovieira/f4ec9b75736a98be5f6198f5ae40b897';
        event.preventDefault();
    }

    public sendArticles = (event: any) => {
        window.location.href = 'https://www.linkedin.com/in/obernardovieira/detail/recent-activity/posts/';
        event.preventDefault();
    }

    /**
     * @ignore
     */
    public render() {
        return (
            <div>
                <section className="intro-section">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <h2 className="section-title">
                                    I’m a freelance <span>digital designer</span>, with +10 years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="portfolio-section">
                    <div className="container">
                        <ul className="portfolio-filter controls">
                            <li className="control" data-filter="all">All</li>
                            <li className="control" data-filter=".web">Web design</li>
                            <li className="control" data-filter=".digital">Digital design</li>
                            <li className="control" data-filter=".rened">3D Renedering</li>
                            <li className="control" data-filter=".brand">Brand Identity</li>
                        </ul>
                    </div>
                    <div className="container-fluid p-md-0 ">
                        <div className="row portfolios-area">
                            <div className="mix col-lg-6 col-md-6 web">
                                <a
                                    href={portfolio1}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio1 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-6 col-md-6 digital">
                                <a
                                    href={portfolio2}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio2 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-4 col-md-6 web">
                                <a
                                    href={portfolio3}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio3 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-4 col-md-6 digital">
                                <a
                                    href={portfolio4}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio4 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-4 col-md-6 rened">
                                <a
                                    href={portfolio5}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio5 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-12 col-md-6 brand">
                                <a
                                    href={portfolio6}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio6 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-6 col-md-6 rened">
                                <a
                                    href={portfolio7}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio7 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="mix col-lg-6 col-md-6 brand">
                                <a
                                    href={portfolio8}
                                    className="portfolio-item set-bg"
                                    style={{ backgroundImage: 'url(' + portfolio8 + ')' }}
                                >
                                    <div className="pi-inner">
                                        <h2>+ See Project</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-section text-center">
                    <div className="container">
                        <h2 className="section-title mb-5">Let’s work together</h2>
                        <a href="" className="site-btn">Get in touch</a>
                        <div className="social-links">
                            <a href=""><span className="fa fa-linkedin" /></a>
                            <a href=""><span className="fa fa-instagram" /></a>
                            <a href=""><span className="fa fa-github" /></a>
                            <a href=""><span className="fa fa-twitter" /></a>
                        </div>
                        <div className="copyright">
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made
                            with <i className="fa fa-heart-o" aria-hidden="true" /> by&nbsp;
                            <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
