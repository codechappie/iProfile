import { Roboto } from 'next/font/google';
import Providers from '../lib/provider';
import '../styles/global.css';
import NextAuthProvider from './lib/NextAuthProvider';

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700']
})

export const metadata = {
    title: 'Nunca Nunca',
    description: "El conocido y divertio juego de Nunca Nunca",
    themeColor: '#000000',
    manifest: "/static/manifest.json"
}

export default function RootLayout({ children }) {
    return <html lang="es" className={`${roboto.className} dark`}>
        <body>
            <NextAuthProvider>
                <Providers>

                    {children}

                </Providers>
            </NextAuthProvider>
        </body>
    </html>
}