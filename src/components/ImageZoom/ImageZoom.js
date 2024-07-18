'use client'

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { IoIosClose } from 'react-icons/io';

const ImageZoom = ({ src, alt, isZoomed, setIsZoomed }) => {

  return (
    <div className="relative">
      <Image src={src} alt={alt} width={900} height={900} className='w-full h-full rounded-md' />
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <Zoom>
              <Image 
                src={src} 
                alt={alt} 
                width={600} 
                height={600} 
                className='max-w-full max-h-full object-contain'
              />
            </Zoom>
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsZoomed(false)}
            >
              <IoIosClose className="text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoom;