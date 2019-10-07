import React, { Component, Suspense } from 'react';

const Home = React.lazy(() => import('./views/home')) as any;
const About = React.lazy(() => import('./views/about')) as any;
const Contact = React.lazy(() => import('./views/contact')) as any;
const Work = React.lazy(() => import('./views/work')) as any;
const NotFound = React.lazy(() => import('./views/notfound')) as any;
const Navbar = React.lazy(() => import('./components/navbar')) as any;


interface IApp {
    view: string;
}
class App extends Component<[], IApp> {
    constructor(props: any) {
        super(props);

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            view: 'home',
        };
    }

    public toogleView = (event: React.MouseEvent<HTMLUListElement>) => {
        this.setState({ view: event.currentTarget.getAttribute('id') as string });
        event.preventDefault();
    }

    public render() {
        let pageContent;
        const { view } = this.state;
        if (view === 'home') {
            pageContent = <Home />;
        } else if (view === 'about') {
            pageContent = <About />;
        }  else if (view === 'contact') {
            pageContent = <Contact />;
        }  else if (view === 'work') {
            pageContent = <Work />;
        } else {
            pageContent = <NotFound />;
        }
        return (
            <div>
                <Suspense fallback={<div>Loading....</div>}>
                    <Navbar navigateClick={this.toogleView} />
                    {pageContent}
                </Suspense>
            </div>
        );
    }
}
export default App;
