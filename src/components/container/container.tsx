import { ReactNode } from 'react';
import styles from './container.module.css';
import { useRouter } from 'next/router';

type Props = {
    children: ReactNode;
};

export const Container = ({ children }: Props) => {
    const { pathname } = useRouter();

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.fixed}>
                    <li className={pathname === '/' ? 'active' : ''}>
                        <a href={'/'}>Home</a>
                    </li>
                    <li className={pathname === '/csr' ? 'active' : ''}>
                        <a href={'/csr'}>CSR</a>
                    </li>
                    <li className={pathname === '/ssr' ? 'active' : ''}>
                        <a href={'/ssr'}>SSR</a>
                    </li>
                    <li className={pathname === '/ssg' ? 'active' : ''}>
                        <a href={'/ssg'}>SSG</a>
                    </li>
                    <li className={pathname === '/isr' ? 'active' : ''}>
                        <a href={'/isr'}>ISR</a>
                    </li>
                    <li className={pathname === '/on-demand-isr' ? 'active' : ''}>
                        <a href={'/on-demand-isr'}>On-Demand ISR</a>
                    </li>
                    <li className={pathname === '/summary' ? 'active' : ''}>
                        <a href={'/summary'}>Summary</a>
                    </li>
                </ul>
                {children}
            </div>
        </>
    );
};
