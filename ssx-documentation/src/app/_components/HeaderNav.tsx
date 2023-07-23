import Link from "next/link";
import { Bungee } from "next/font/google";

import SSXLogo from '../../../public/SSX.png'

const bungee = Bungee({ weight: '400', subsets: ['latin'] });

export default function HeaderNav() {
    return (
        <div className={`w-full sticky top-0 flex justify-between px-8 py-2 bg-gray-900 border-b-2 border-white text-violet-500 ${bungee.className}`}>
            <div className="left flex hover:bg-black hover:text-violet-400">
                <Link href={'/'} className="flex">
                    <img src={SSXLogo.src} style={{ width: 57, height: 51, display: 'inline-block' }} className="p-2"/>
                    <p className="text-4xl py-2 pr-2 inline-block">{'SSX'}</p>
                </Link>
            </div>
            <div className="right w-1/3 flex justify-between items-center">
                <Link className="text-3xl py-1 px-2 hover:bg-black hover:text-violet-400" href={'/ssx'}>{'About SSX'}</Link>
                <Link className="text-3xl py-1 px-2 hover:bg-black hover:text-violet-400" href={'/reference'}>{'References'}</Link>
            </div>
        </div>
    );
}