// MAIN MODULES
import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';

// PAGES
import Main from './pages';

// STYLES
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <Main/>
                </Router>
            </Provider>
        );
    }
}
export default App;