import Image from 'next/image';
import banner from '../../../public/assets/banner.jpeg';

const Banner = () => {
    return (
        <div className=''>
            <Image src={banner} sizes='100vw' alt='banner' />
        </div>
    );
};

export default Banner;
