import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';

const Home = () => {

    

    return (
        <div>
            <h1>home page {user && user.displayName }</h1>
        </div>
    );
};

export default Home;