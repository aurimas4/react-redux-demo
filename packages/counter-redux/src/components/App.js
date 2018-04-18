import React, { Component } from 'react';
import Counter from './Counter';
import CounterReusable from './CounterReusable';
import CounterReusableArray from './CounterReusableArray';

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
                <div>
                    <h2>CounterReusableArray (1)</h2>
                    <CounterReusableArray identifier={'1'}/>
                </div>
                <div>
                    <h2>CounterReusableArray (2)</h2>
                    <CounterReusableArray identifier={'2'}/>
                </div>
                <div>
                    <h2>CounterReusableArray (3)</h2>
                    <CounterReusableArray identifier={'3'}/>
                </div>
            </div>
        );
    }
}
