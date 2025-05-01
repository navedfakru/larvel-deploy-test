import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
          <Head>
            <title>Naved</title>
          </Head>
            <h1 className='bg-green-600 h-screen w-screen flex justify-center items-center dark:text-white dark:bg-red-500/20 text-2xl font-black text-white overflow-hidden'>this naved here do you know naved</h1>
            <Link href='/'>
              go to home
            </Link>
        </>
    );
}
