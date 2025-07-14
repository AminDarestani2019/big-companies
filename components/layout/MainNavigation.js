import Link from "next/link";
import classes from './MainNavigation.module.css';

export default function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Successful companies based on Acquired podcast</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">All companies</Link>
                    </li>
                    <li>
                        <Link href="/new-company">Add New Company</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}