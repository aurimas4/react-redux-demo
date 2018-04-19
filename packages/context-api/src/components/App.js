import React, { Component } from 'react';

import UserBlock from './UserBlock';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: 1,
                username: 'user1',
                email: '1@gmail.com',
            },
        };
    }

    render() {
        return (
            <div>
                <UserBlock user={this.state.user}/>
            </div>
        );
    }
}
