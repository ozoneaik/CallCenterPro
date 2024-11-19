import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <nav>
                {auth.user ? (
                    <Link href={route('dashboard')}>Dashboard</Link>
                ) : (
                    <>
                        <Link href={route('login')}>Log in</Link>
                        <Link href={route('register')} >Register</Link>
                    </>
                )}
            </nav>
        </>
    );
}
