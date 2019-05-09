import { useState, useEffect } from 'react';
import axios from 'axios';

const useResource = (resource) => {

    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);

    };

    useEffect(
        () => {
            // useEffect 裡面不能直接寫 Promise 在這裡面~
            // 不過, 雖然說不能直接寫 Promise, 但是可以包在 IIFE 裡面~ XD
            // 要用 Promise 就包在外面的 fn -> fetchResource
            fetchResource(resource);

        },
        // function 只想被 'call 一次' 的話, 給個空陣列
        // []
        // function 傳入 '不同的值的時候', 才會被 call
        [resource]
        // 如果 'always 想被 call' , 就不傳第二個參數
    );

    return resources;

};

export default useResource;
