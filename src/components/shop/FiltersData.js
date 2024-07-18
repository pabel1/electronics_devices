import React from 'react';
import { IoIosClose } from "react-icons/io";

const FiltersData = () => {
    return (
        <div className=' mb-7'>
            <div className='rounded-md flex items-center gap-4 bg-blue-100 px-5 py-3.5'>
                <p className='font-medium'>Filters: </p>
                <div className='flex items-center gap-1.5'>
                    <p className='bg-[#050C2E] text-white text-sm px-3 py-0.5 rounded flex items-center gap-0.5'>$500.00-900.00 <IoIosClose className='text-base cursor-pointer'/></p>
                    <p className='bg-[#050C2E] text-white text-sm px-3 py-0.5 rounded flex items-center gap-0.5'>$500.00-900.00 <IoIosClose className='text-base cursor-pointer'/></p>
                    <p className='bg-[#050C2E] text-white text-sm px-3 py-0.5 rounded flex items-center gap-0.5'>$500.00-900.00 <IoIosClose className='text-base cursor-pointer'/></p>
                </div>
            </div>
        </div>
    );
};

export default FiltersData;