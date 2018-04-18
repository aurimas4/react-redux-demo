import React, { Component } from 'react';
import Counter from './Counter';

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
            </div>
        );
    }
}
