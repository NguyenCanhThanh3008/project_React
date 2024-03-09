'use client';
import { log } from 'console';
import { useRouter } from 'next/navigation';

const Fbid = (props: any) => {
    const { params } = props;
    console.log(params);
    console.log(props);

    return (
        <div className=''>
            <p>a</p>
        </div>
    );
};

export default Fbid;
