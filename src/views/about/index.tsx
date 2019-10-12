import React, { Component } from 'react';


class About extends Component {

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
                                    I’m a <span>blockchain developer</span>, writer and public speaker
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Hello, I'm Bernardo. A fulltime blockchain developer and explorer of the ecosystem.
                                    Often joining hackathons and sometimes winning. I've been working as a developer
                                    for a few years. Contributing to many open source projects and also maintaining
                                    some. I also like IoT and to discuss the future of the economy and society.
                                    Thinking about how can I improve the future fascinates me.
                                </p>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="milestone">
                                            <h2>30+<span>Projects</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="milestone">
                                            <h2>5+<span>Collabs</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <figure className="mt-5">
                                    <img src="img/sign.png" alt="" />
                                </figure>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <figure className="pic-frame">
                                    <img src="https://gateway.pinata.cloud/ipfs/QmXoiiGhNUSyKuggbdVxG4G7XSb7caW9Hv39iaStJw4ppp" alt="obernardovieira;profile" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-section text-center">
                    <div className="container">
                        <h2 className="section-title mb-5">Let’s work together</h2>
                        <a href="" className="site-btn">Get in touch</a>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/obernardovieira/">
                                <span className="fa fa-linkedin" />
                            </a>
                            <a href="https://github.com/obernardovieira">
                                <span className="fa fa-github" />
                            </a>
                            <a href="https://twitter.com/obernardovieira">
                                <span className="fa fa-twitter" />
                            </a>
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

export default About;
