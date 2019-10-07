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
                                    I’m a freelance <span>digital designer</span>, with +10 years of experience
                            </h2>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet pharetra
                                    nisl. Vestibulum sollicitudin leo non purus vestibulum placerat. Curabitur ac erat
                                    sollicitudin, blandit quam vitae, rutrum diam. Aenean non gravida velit, eu
                                    consectetur neque. Nullam in volutpat massa. Duis scelerisque urna non lectus
                                    fringilla suscipit. Phasellus lacinia facilisis massa, pellentesque consectetur
                                    nunc. Nullam elit metus, condimentum nec libero quis,
                                dapibus malesuada enim. Morbi semper condimentum pellentesque. </p>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="milestone">
                                            <h2>56<span>Clients</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="milestone">
                                            <h2>112<span>Projects</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="milestone">
                                            <h2>25<span>Collabs</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <figure className="mt-5">
                                    <img src="img/sign.png" alt="" />
                                </figure>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <figure className="pic-frame">
                                    <img src="img/about.jpg" alt="" />
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

export default About;
