import React, { Component } from 'react';

import EnabledProducts from './EnabledProducts';
import DisabledProducts from './DisabledProducts';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <EnabledProducts/>
                </div>
                <div>
                    <DisabledProducts/>
                </div>
            </div>
        );
    }
}
