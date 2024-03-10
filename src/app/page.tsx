import Link from 'next/link';
import DefaultLayout from '@/components/defaultLayout/defaultLayout';
import Banner from '@/components/banner/banner';
import Container from '@/components/container/container';

export default function Home() {
    return (
        <main className=''>
            <DefaultLayout>
                <Banner />
                <Container />
            </DefaultLayout>
        </main>
    );
}
