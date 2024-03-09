import Link from 'next/link';
import styles from './header.module.css';
import { dataNav } from '@/dummyData/dataHeader';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Artcraft.</div>
            <ul className={styles.navbar}>
                {dataNav.map((e) => {
                    return (
                        <li key={e.id}>
                            <Link href={e.href}>{e.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.profile}>
                <div className={`${styles.profile_item} ${styles.search}`}>
                    search
                </div>
                <div className={`${styles.profile_item} ${styles.avata}`}>
                    avata
                </div>
                <div className={`${styles.profile_item} ${styles.cart}`}>
                    cart
                </div>
            </div>
        </div>
    );
};

export default Header;
