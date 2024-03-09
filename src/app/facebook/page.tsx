'use client';
import { useRouter } from 'next/navigation';
import styles from './facebook.module.css';

const Facebook = () => {
    const router = useRouter();
    const onBack = () => {
        router.back();
    };

    return (
        <div className=''>
            <p className={styles.txt}>Facebook</p>
            <button className={styles.btn} onClick={onBack}>
                Click me
            </button>
        </div>
    );
};

export default Facebook;
