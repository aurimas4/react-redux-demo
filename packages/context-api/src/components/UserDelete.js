import React, { Component } from 'react';

import { UserContext } from './UserContext';

export default class UserDelete extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(user, afterUserDelete) {
        setTimeout(() => {
            console.log('user deleted');

            afterUserDelete();
        }, 1000);
    }

    render() {
        return (
            <UserContext.Consumer>
                {({ user, afterUserDelete }) => (
                    <button
                        onClick={() => this.deleteUser(user, afterUserDelete)}
                    >delete user</button>
                )}
            </UserContext.Consumer>
        );
    }
}
