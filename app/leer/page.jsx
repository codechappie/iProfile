"use client";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AppContainer from '../../components/AppContainer';

const Leer = () => {
    const data = useSelector(state => state.userInfo);

    console.log("DATA", data)


    return (
        <AppContainer>

            <Link href="/">
                Inicio
            </Link>
            <div>{data.name}</div>
            <a href="/api/auth/signout">Sign out by link</a>
        </AppContainer>
    )
}

export default Leer