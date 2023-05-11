import React from 'react';
import NavBar from '../components/NavBar';
import Description from '../components/Description';


const Home = () => {
    return (
        <div className='home'>
            <div>
            <NavBar />
            </div>
            <div>
            <Description />
            </div>
        </div>
    );
};

export default Home;