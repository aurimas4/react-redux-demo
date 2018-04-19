import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from './UserContext';
import UserInfo from './UserInfo';

export default class UserBlock extends Component {
    afterUserDelete() {
        console.log('user block after user delete');
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={{ user: this.props.user, afterUserDelete: this.afterUserDelete }}>
                    <UserInfo/>
                </UserContext.Provider>
            </div>
        );
    }
}

UserBlock.propTypes = {
    user: PropTypes.object.isRequired,
};
