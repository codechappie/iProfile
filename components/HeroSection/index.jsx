import React from 'react'
import style from './herosection.module.scss'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className={style.heroSection}>
            <div className={style.heroText}>
                <h1>
                    <span>iProfile: </span>
                    Una nueva forma de presentar tus enlaces
                </h1>
                <p>
                    Tu espacio personal para mostrar quién eres y construir tu presencia digital. Organiza tus enlaces y proyectos.
                </p>
                <Link href="/login">
                    Crear perfil
                </Link>
            </div>

            <div className={style.heroImage}>
                <img src="/static/img/hero_image.png" alt="" />
            </div>
        </div>
    )
}

export default HeroSection