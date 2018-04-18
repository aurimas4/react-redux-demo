import React, { Component } from 'react';
import Counter from './Counter';
import CounterReusable from './CounterReusable';

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
                    <h2>CounterReusable (1)</h2>
                    <CounterReusable identifier={'A'}/>
                </div>
                <div>
                    <h2>CounterReusable (2)</h2>
                    <CounterReusable identifier={'B'}/>
                </div>
            </div>
        );
    }
}
