import React from 'react';
import useResource from './useResource';

const UserList = () => {

    const users = useResource('users');

    return (
        <div>
            users: {users.length}
        </div>
    );

};

export default UserList;
