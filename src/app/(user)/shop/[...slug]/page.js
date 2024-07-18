import FiltersData from '@/components/shop/FiltersData';
import Products from '@/components/shop/Products';
import React from 'react';


const ShopPage = () => {
    return (
        <div className='px-10'>
            <FiltersData/>
            <Products/>
        </div>
    );
};

export default ShopPage;