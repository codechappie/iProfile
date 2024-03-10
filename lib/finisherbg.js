import { useEffect } from 'react';

const FinisherHeaderScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.finisher.co/lab/header/assets/finisher-header.es5.min.js';
        script.async = true;

        script.onload = () => {
            new FinisherHeader({
                "count": 11,
                "size": {
                    "min": 700,
                    "max": 1500,
                    "pulse": 1
                },
                "speed": {
                    "x": {
                        "min": 0.9,
                        "max": 3.1
                    },
                    "y": {
                        "min": 0.4,
                        "max": 2.4
                    }
                },
                "colors": {
                    "background": "#000000",
                    "particles": [
                        "#000000",
                        "#00cb12",
                        "#552f02"
                    ]
                },
                "blending": "overlay",
                "opacity": {
                    "center": 0.6,
                    "edge": 0
                },
                "skew": 0,
                "shapes": [
                    "c"
                ]
            });
        };

        document.head.appendChild(script);

        return () => {
            // Limpiar el script si es necesario al desmontar el componente
            document.head.removeChild(script);
        };
    }, []);

    return null; // El componente no renderiza nada
};

export default FinisherHeaderScript;