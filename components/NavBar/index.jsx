import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link href="/">Inicio</Link>


            {/* <Link href="/">Cerrar sesión</Link> */}
            <button onClick={() => signOut()}>
                Cerrar
            </button>
        </div>
    )
}

export default NavBar