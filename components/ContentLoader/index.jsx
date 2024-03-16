import React from 'react';
import style from './content-loader.module.scss';

const ContentLoader = ({ show }) => {
    return (
        <div className={`${style.contentLoader} ${show && style.show}`}>
            Cargando contenido...
        </div>
    )
}

export default ContentLoader