import { ReactNode } from 'react';
import Header from '../header/page';
import Footer from '../footer/page';
import styles from './defaultLayout.module.css';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
