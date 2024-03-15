import React from 'react'
import styles from './app-container.module.scss'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';
import Loader from '../../components/Loader';


const AppContainer = ({ children }) => {

    const { data: session, status } = useSession();

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