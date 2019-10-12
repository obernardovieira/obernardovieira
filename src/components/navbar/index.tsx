import React, { Component } from 'react';


class Navbar extends Component<{ navigateClick: any }, {}> {

    public render() {
        return (
            <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3">
                            <div className="logo">
                                <h2 className="site-logo">Riddle</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                            <a href="" className="site-btn header-btn">Get in touch</a>
                            <nav className="main-menu">
                                <ul>
                                    <li id="home" onClick={this.props.navigateClick}><a href="">Home</a></li>
                                    <li id="about" onClick={this.props.navigateClick}><a href="">About</a></li>
                                    <li id="contact" onClick={this.props.navigateClick}><a href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="nav-switch">
                    <i className="fa fa-bars" />
                </div>
            </header>
        );
    }
}
export default Navbar;
