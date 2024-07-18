import Image from 'next/image';
import ad from "../../assets/images/banner-16.jpg"

const TopLandingAd = () => {
    return (
        <div className='mt-3 rounded-lg relative'>
            <Image src={ad} alt='offers ad' className='rounded-lg'></Image>
            <h4 className='text-black text-xl sm:text-2xl md:text-4xl font-bold absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 text-center'>Discount 50% on <br />All Iwatch</h4>
        </div>
    );
};

export default TopLandingAd;