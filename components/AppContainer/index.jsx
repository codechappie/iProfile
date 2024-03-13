import React from 'react'
import styles from './app-container.module.scss'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import NavBar from '../NavBar';
import BottomBar from '../BottomBar';
import Loader from '../Loader';


const AppContainer = ({ children }) => {

    const { data: session, status } = useSession();
    console.log("status", status);
    console.log("session", session);

    if (status === "loading") {
        return <Loader show={true} />
    }

    if (status === "unauthenticated") {
        redirect("/login")
    }

    if (status === "authenticated") {
        return (
            <>
                <NavBar />
                <div className={styles.appContainer}>
                    {children}
                </div>
                <BottomBar />
            </>
        )
    }
}

export default AppContainer