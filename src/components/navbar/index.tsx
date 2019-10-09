import React, { Component } from 'react';


class Navbar extends Component<{ navigateClick: any }, {}> {

    public render() {
        return (
            <header className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="logo">
                            <h2 className="site-logo">Riddle</h2>
                        </div>
                        <div className="home-2 container text-left text-md-right">
                            <nav className="main-menu">
                                <ul>
                                    <li id="home" onClick={this.props.navigateClick}><a href="">Home</a></li>
                                    <li id="about" onClick={this.props.navigateClick}><a href="">About</a></li>
                                    <li id="contact" onClick={this.props.navigateClick}><a href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <a href="" className="site-btn header-btn">Get in touch</a>
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
