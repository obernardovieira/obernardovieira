import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = React.lazy(() => import('./views/home')) as any;

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading....</div>}>
                <Router>
                    <Home path="/" />
                </Router>
            </Suspense>
        </div>
    );
}
export default App;
