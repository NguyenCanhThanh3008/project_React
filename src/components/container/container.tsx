import Image from 'next/image';
import banner from '../../../public/assets/banner.jpeg';
import styles from './container.module.css';
import { dataService } from '../../dummyData/dataService';
import { dataCate } from '../../dummyData/dataService';

const Container = () => {
    return (
        <div className=''>
            <ul className={styles.top_container}>
                {dataService.map((e) => {
                    return (
                        <li key={e.id} className={styles.top_container_item}>
                            <div className={styles.icon}>icon</div>
                            <div className={styles.content}>
                                <div className={styles.name}>{e.name}</div>
                                <div className={styles.des}>{e.des}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.top_categories}>
                <h2>Top Categories</h2>
                <div className={styles.cate_content}>
                    {dataCate.map((e) => {
                        return (
                            <div key={e.id} className=''>
                                <p>{e.name}</p>
                                <Image src={e.img} sizes='100vw' alt='cate1' />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.featured_products}>
                <h2>Featured Products</h2>
                <div className={styles.cate_content}>
                    {dataCate.map((e) => {
                        return (
                            <div key={e.id} className=''>
                                <p>{e.name}</p>
                                <Image src={e.img} sizes='100vw' alt='cate1' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Container;
