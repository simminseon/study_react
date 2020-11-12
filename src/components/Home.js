import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './Navigator/Nav';

export const Home = (navList) => {
    return (
    <div>
        <h2>Home</h2>
        <Nav props={navList}/>
    </div>
    );
}

Home.propTypes = {
    navList: PropTypes.array
};

Home.defaultProps = {
    navList: [
        'Home',
        'Board',
        'MyPage',
        'Q&A'
    ],
};