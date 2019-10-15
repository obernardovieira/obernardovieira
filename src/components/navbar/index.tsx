import React, { Component } from 'react';


class Navbar extends Component<{ navigateClick: any }, { displayMenu: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            displayMenu: '',
        };
    }

    public handleOpenNavBar = () => {
        const { displayMenu } = this.state;
        if (displayMenu === '') {
            this.setState({ displayMenu: 'block' });
        } else if (displayMenu === 'block') {
            this.setState({ displayMenu: 'none' });
        } else if (displayMenu === 'none') {
            this.setState({ displayMenu: 'block' });
        }
    }

    public handleClickMovePage = (event: any) => {
        event.preventDefault();
        this.props.navigateClick(event);
        this.setState({ displayMenu: 'none' });
    }

    public render() {
        const { displayMenu } = this.state;
        return (
            <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3">
                            <div className="logo">
                                <h2 className="site-logo">obernardovieira</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                            <a
                                href="https://www.linkedin.com/in/obernardovieira/"
                                className="site-btn header-btn"
                            >
                                Get in touch
                            </a>
                            <nav className="main-menu" style={{ display: displayMenu }}>
                                <ul>
                                    <li id="home" onClick={this.handleClickMovePage}><a href="">Home</a></li>
                                    <li id="about" onClick={this.handleClickMovePage}><a href="">About</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="nav-switch" onClick={this.handleOpenNavBar}>
                    <i className="fa fa-bars" />
                </div>
            </header>
        );
    }
}
export default Navbar;
