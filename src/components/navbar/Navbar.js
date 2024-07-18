import React from 'react';
import TopNav from './TopNav';
import SearchNav from './SearchNav';
import CategoryNav from './CategoryNav';

const Navbar = () => {
    return (
        <div className='bg-[#050C2E] text-white'>
            {/* <TopNav/> */}
            <SearchNav/>
            <CategoryNav/>
        </div>
    );
};

export default Navbar;