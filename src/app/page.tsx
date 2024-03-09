import Link from 'next/link';
import DefaultLayout from '@/components/defaultLayout/defaultLayout';

export default function Home() {
    return (
        <main className=''>
            <DefaultLayout>
                <p>home</p>
            </DefaultLayout>
        </main>
    );
}
