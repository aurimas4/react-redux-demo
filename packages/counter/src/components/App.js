import React, { Component } from 'react';
import Counter from './Counter';
import CounterReducer from './CounterReducer';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Counter (1)</h2>
                    <Counter/>
                </div>
                <div>
                    <h2>Counter (2)</h2>
                    <Counter/>
                </div>
                <div>
                    <h2>CounterReducer (1)</h2>
                    <CounterReducer/>
                </div>
                <div>
                    <h2>CounterReducer (2)</h2>
                    <CounterReducer/>
                </div>
            </div>
        );
    }
}
