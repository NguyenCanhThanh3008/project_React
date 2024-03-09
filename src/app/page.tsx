import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
    return (
        <main className=''>
            <div className={styles.header}>
                <ul className={styles.navBar}>
                    <li className={styles.item}>
                        <Link href='/facebook'>Facebook</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/zalo'>Zalo</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/instagram'>Instagram</Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
