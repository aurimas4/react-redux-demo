import React, { Component } from 'react';

import { UserContext } from './UserContext';

export default class UserEmail extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({ user }) => <div>Email: {user.email}</div>}
            </UserContext.Consumer>
        )
    }
}
