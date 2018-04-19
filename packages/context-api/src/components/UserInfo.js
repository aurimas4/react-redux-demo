import React, { Component } from 'react';

import { UserContext } from './UserContext';

import UserEmail from './UserEmail';
import UserDelete from './UserDelete';

export default class UserInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <UserContext.Consumer>
                        {({ user }) => (
                            <div>id: {user.id}</div>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserEmail/>
                <UserDelete/>
            </div>
        );
    }
}
