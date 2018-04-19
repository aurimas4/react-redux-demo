import React, { Component } from 'react';
import CounterReusableArray from './CounterReusableArray';

export default class App extends Component {
    render() {
        return (
            <div>
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
