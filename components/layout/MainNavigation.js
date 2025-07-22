import Link from "next/link";
import classes from './MainNavigation.module.css';
import { useState } from "react";

export default function MainNavigation(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="bg-purple-900 text-white px-4 py-3 flex items-center justify-between flex-wrap">
            <div className="text-2xl font-bold max-w-[70%] truncate">Successful companies based on Acquired podcast</div>
            <button
                className="text-2xl md:hidden"
                onClick={()=>setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            <nav className={`w-full md:w-auto ${menuOpen ? "block" : "hidden"} md:block px-4`}>
                <ul className="flex flex-col md:flex-row md:space-x-6 md:mt-0">
                    <li>
                        <Link href="/"
                        className="text-pink-200 hover:text-white text-xl block py-1"
                        >All companies</Link>
                    </li>
                    <li>
                        <Link href="/new-company"
                        className="text-pink-200 hover:text-white text-xl block py-1"
                        >Add New Company</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}