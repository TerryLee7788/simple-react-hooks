import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

    const [resource, setResource] = useState(['posts']);

    return (
        <div>
            <UserList />
            <button onClick={() => {

                setResource('posts');
                
            }}>
                posts
            </button>
            <button
                onClick={() => {

                    setResource('todos');

                }}
            >
                todos
            </button>
            <div>
                <ResourceList
                    resource={resource}
                />
            </div>
        </div>
    );
};

export default App;
