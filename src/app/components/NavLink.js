// components/NavLink.js
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    // 현재 경로가 href와 일치하면 active 클래스를 추가
    const isActive = pathname === href;

    return (
        <Link href={href} className='linkButton'>
            <div className={`${pathname === '/default' ? 'leftLink' : 'rightLink'} ${isActive ? 'active' : ''}`}>
                {children}
            </div>
        </Link>
    );
};

export default NavLink;
