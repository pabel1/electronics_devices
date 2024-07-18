import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';

const rightSideData = [
    { title: "Flash Sale" },
    { title: "Track Order" },
    { title: "About" },
    { title: "Contact" },
    { title: "Blog" },
]

const TopNav = () => {
    return (
        <div className='px-12 hidden lg:grid grid-cols-2 bg-black'>
            <div className='flex items-center gap-4'>
                <div>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Français">Français</SelectItem>
                            <SelectItem value="Deutsch">Deutsch</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h1 className='text-white text-sm'>Free Shipping On All Orders Over $100</h1>
                </div>
            </div>
            <div className='flex items-center justify-end gap-8'>
                {
                    rightSideData?.map((data, index) => {
                        return <div key={index}>
                            <Link href='/' className='text-white text-sm hover:text-amber-400'>{data.title}</Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default TopNav;