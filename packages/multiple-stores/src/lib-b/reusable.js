import React, { Component } from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
    thunk,
];

export default class LibB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: null,
        };
    }

    componentDidMount() {
        const store = createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(...middleware))
        );

        this.setState({
            store,
        });
    }

    render() {
        return (
            <div>
                { this.state.store !== null && (
                    <Provider store={this.state.store}>
                        <App />
                    </Provider>
                ) }
            </div>
        );
    }
}