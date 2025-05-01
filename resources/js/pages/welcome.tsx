import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { LucideMinus, LucidePlus } from 'lucide-react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [number, setNumber] = useState<number>(12)

    return (
        <>
            <div className="h-screen w-full flex items-center justify-center flex-col bg-amber-300">
                <p className='bg-white text-black font-bold text-2xl p-5 rounded-md'>{number}</p>
                <div>
                <button className='p-2 m-2 text-xl bg-red-600/20 text-white font-bold rounded-md'
                    onClick={() => setNumber((prev) => prev + 1)}
                >
                    <LucidePlus size={24} />
                </button>
                <button className='p-2 m-2 text-xl bg-green-600/20 text-white font-bold rounded-md'
                    onClick={() => setNumber((prev) => prev - 1)}
                >
                    <LucideMinus size={24} />
                </button>

                </div>
            </div>
        </>
    );
}
