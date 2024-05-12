"use client"
import styles from "./header.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.back}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                    <path d="M13.2424 28.6776L0.529695 15.9649C0.337079 15.7723 0.200321 15.5636 0.119422 15.3389C0.039807 15.1142 0 14.8734 0 14.6166C0 14.3598 0.039807 14.119 0.119422 13.8943C0.200321 13.6696 0.337079 13.4609 0.529695 13.2683L13.2424 0.555623C13.5955 0.202493 14.0366 0.0175824 14.5656 0.000889002C15.096 -0.0145203 15.5538 0.170391 15.939 0.555623C16.3242 0.908753 16.5252 1.34985 16.5419 1.8789C16.5573 2.40924 16.3724 2.86702 15.9872 3.25225L6.54896 12.6905H28.0738C28.6196 12.6905 29.0774 12.8747 29.4472 13.2433C29.8157 13.6131 30 14.0709 30 14.6166C30 15.1624 29.8157 15.6195 29.4472 15.988C29.0774 16.3579 28.6196 16.5428 28.0738 16.5428H6.54896L15.9872 25.981C16.3403 26.3341 16.5252 26.7836 16.5419 27.3293C16.5573 27.875 16.3724 28.3245 15.9872 28.6776C15.634 29.0628 15.1846 29.2555 14.6388 29.2555C14.0931 29.2555 13.6276 29.0628 13.2424 28.6776Z" fill="#9F9F9F" />
                </svg>
            </Link>


            <ul className={styles.links}>
                <li>
                    <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;