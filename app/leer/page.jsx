"use client";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AppContainer from '@/components/AppContainer';

const Leer = () => {
    const data = useSelector(state => state.userSlice);

    console.log("DATA", data)


    return (
        <AppContainer>

            <Link href="/">
                Inicio
            </Link>

            <h2>{data.name}</h2>

            <a href="/api/auth/signout">Sign out by link</a>
        </AppContainer>
    )
}

export default Leer