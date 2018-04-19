import React, { Component } from 'react';
import LibA from '../lib-a';
import LibB from '../lib-b';
import LibAReusable from '../lib-a/reusable';
import LibBReusable from '../lib-a/reusable';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>LibA (1)</h1>
                    <LibA/>
                </div>
                <div>
                    <h1>LibA (2)</h1>
                    <LibA/>
                </div>
                <div>
                    <h1>LibB (1)</h1>
                    <LibB/>
                </div>
                <h1>--REUSABLE-----------------------------------</h1>
                <div>
                    <h1>LibAReusable (1)</h1>
                    <LibA/>
                </div>
                <div>
                    <h1>LibAReusable (2)</h1>
                    <LibA/>
                </div>
                <div>
                    <h1>LibBReusable (1)</h1>
                    <LibB/>
                </div>
            </div>
        );
    }
}
