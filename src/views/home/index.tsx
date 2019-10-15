import React, { Component } from 'react';

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
                                    I’m a <span>blockchain developer</span>, writer and public speaker
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="portfolio-section">
                    <div className="container">
                        <ul className="portfolio-filter controls">
                            <li className="control" data-filter="all">
                                Hello, friend! Below are my most recent articles. Take a moment to read some.
                                I know you will like it.
                            </li>
                        </ul>
                    </div>
                    <div className="container-fluid p-md-0 ">
                        <div className="row portfolios-area">
                            {this.generateArticlesView()}
                        </div>
                    </div>
                </section>

                <footer className="footer-section text-center">
                    <div className="container">
                        <h2 className="section-title mb-5">Let’s work together</h2>
                        <a href="https://www.linkedin.com/in/obernardovieira/" className="site-btn">Get in touch</a>
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

    private generateArticlesView = () => {
        return this.loadArticlesData().map((article) => {
            const thisClassName = 'mix col-lg-' + article.width + ' col-md-6';
            return (<div key={article.previewImage} className={thisClassName}>
                <a
                    href={article.linkTo}
                    className="portfolio-item set-bg"
                    style={{ backgroundImage: 'url(' + article.previewImage + ')' }}
                >
                    <div className="pi-inner">
                        <h2>{article.title}</h2>
                    </div>
                </a>
            </div>);
        });
    }

    private loadArticlesData = () => {
        return [
            {
                linkTo: 'https://www.linkedin.com/pulse/how-develop-human-friendly-blockchain-applications-bernardo-vieira/',
                previewImage: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                title: 'How to Develop Human-Friendly Blockchain Applications',
                width: 6,
            },
            {
                linkTo: 'https://www.linkedin.com/pulse/better-authentication-uport-bernardo-vieira/',
                previewImage: 'https://images.unsplash.com/photo-1446848547961-9fc8703b0911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                title: 'Better Authentication with uPort',
                width: 6,
            },
            {
                linkTo: 'https://www.linkedin.com/pulse/how-i-won-consensys-blockchain-grants-hackathon-bernardo-vieira/',
                previewImage: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                title: 'How I won a ConsenSys Blockchain Grants Hackathon',
                width: 4,
            },
            {
                linkTo: 'https://www.linkedin.com/pulse/gentlemans-introduction-web3j-from-java-bernardo-vieira/',
                previewImage: 'https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'A Gentleman’s Introduction to Web3j from Java',
                width: 4,
            },
            {
                linkTo: 'https://www.linkedin.com/pulse/creating-upgradeable-smart-contracts-bernardo-vieira/',
                previewImage: 'https://www.loudwallpapers.com/wp-content/uploads/2019/01/women-in-yellow-hat-doing-work-hard-at-factory-.jpg',
                title: 'Creating Upgradeable Smart Contracts',
                width: 4,
            },
            {
                linkTo: 'https://www.linkedin.com/pulse/my-challenges-magic-ipfs-bernardo-vieira/',
                previewImage: 'https://images.unsplash.com/photo-1510759591315-6425cba413fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'My challenges with the magic of IPFS',
                width: 12,
            },
        ];
    }
}

export default Home;
