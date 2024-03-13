import React from 'react';
import style from './loader.module.scss';
import { Spinner } from '@nextui-org/react';

const Loader = ({show}) => {
    return (
        <div className={`${style.spinner} ${show && style.show}`}>
            <Spinner className={style.loader} size="lg" labelColor="success" />
        </div>
    )
}

export default Loader