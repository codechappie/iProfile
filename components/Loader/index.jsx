import React from 'react';
import style from './loader.module.scss';

const Loader = ({ show }) => {
    return (
        <div className={`${style.spinner} ${show && style.show}`}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
            >
                <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
            </svg>

        </div>
    )
}

export default Loader