import React from 'react';
import useResource from './useResource';

const ResourceList = ({ resource }) => {

    const resources = useResource(resource);

    return <div>
        {resources.length}
    </div>;

};

export default ResourceList;
