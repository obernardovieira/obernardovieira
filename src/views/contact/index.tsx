import React, { Component } from 'react';

interface IContactState {
    name: string;
    email: string;
    subject: string;
    where: string;
    message: string;
}
class Contact extends Component<{}, IContactState> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            message: '',
            name: '',
            subject: '',
            where: '',
        };
    }

    public handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
        const { name, email, subject, where, message } = this.state;
        //
        event.preventDefault();
    }

    public handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.currentTarget.name === 'name') {
            this.setState({ name: event.currentTarget.value });
        } else if (event.currentTarget.name === 'email') {
            this.setState({ email: event.currentTarget.value });
        } else if (event.currentTarget.name === 'subject') {
            this.setState({ subject: event.currentTarget.value });
        } else if (event.currentTarget.name === 'where') {
            this.setState({ where: event.currentTarget.value });
        } else if (event.currentTarget.name === 'message') {
            this.setState({ message: event.currentTarget.value });
        }
    }

    /**
     * @ignore
     */
    public render() {
        const { name, email, subject, where, message } = this.state;
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
                        <form className="contact-form" onSubmit={this.handleSubmitMessage}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        value={subject}
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="How did you hear about me?"
                                        name="where"
                                        value={where}
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        value={message}
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="site-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </section>

                <footer className="footer-section text-center">
                    <div className="container">
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

export default Contact;
