import { useEffect } from 'react';

const FinisherHeaderScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.finisher.co/lab/header/assets/finisher-header.es5.min.js';
        script.async = true;

        script.onload = () => {
            new FinisherHeader({
                "count": 8,
                "size": {
                    "min": 1300,
                    "max": 1500,
                    "pulse": 0
                },
                "speed": {
                    "x": {
                        "min": 0.1,
                        "max": 0.6
                    },
                    "y": {
                        "min": 0.1,
                        "max": 0.6
                    }
                },
                "colors": {
                    "background": "#322100",
                    "particles": [
                        "#48ff62",
                        "#000000",
                        "#074a1b",
                        "#000000",
                        "#0004ff"
                    ]
                },
                "blending": "overlay",
                "opacity": {
                    "center": 0.5,
                    "edge": 0.05
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