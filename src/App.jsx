import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Pages/Main';

export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route path="/" exact component={Main} />
                </div>
            </Router>
        </div>
    );
}