import React, { Component } from 'react';


class Contact extends Component {
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
                            <div className="col-lg-6 offset-lg-3 contect-tect">
                                <h2>So, let’s talk</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer sit amet pharetra nisl.
                                    Vestibulum sollicitudin leo non purus vestibulum placerat.
                                    Curabitur ac erat sollicitudin, blandit quam vitae.
                    </p>
                            </div>
                        </div>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="E-mail" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="How did you hear about us?" />
                                </div>
                                <div className="col-md-12">
                                    <textarea placeholder="Message" />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="site-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;
