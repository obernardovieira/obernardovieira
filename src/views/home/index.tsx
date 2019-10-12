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
                                    I’m a <span>blockchain developer</span>, writer and public speaker
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
                            {this.generateArticlesView()}
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

    private generateArticlesView = () => {
        return this.loadArticlesData().map((article) => {
            return (<div key={article.previewImage} className="mix col-lg-6 col-md-6">
                <a
                    href={article.previewImage}
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
                previewImage: portfolio1,
                title: '+ See Project',
            },
            {
                previewImage: portfolio2,
                title: '+ See Project',
            },
            {
                previewImage: portfolio3,
                title: '+ See Project',
            },
            {
                previewImage: portfolio4,
                title: '+ See Project',
            },
            {
                previewImage: portfolio5,
                title: '+ See Project',
            },
            {
                previewImage: portfolio6,
                title: '+ See Project',
            },
            {
                previewImage: portfolio7,
                title: '+ See Project',
            },
            {
                previewImage: portfolio8,
                title: '+ See Project',
            },
        ];
    }
}

export default Home;
