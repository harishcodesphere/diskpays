import '@/styles/globals.css'
import '@/styles/layout.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Chatbot from '@/components/Chatbot'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata = {
    title: 'DiskPays Developer Central',
    description: 'Enterprise-grade payment processing APIs, SDKs, and documentation. Build powerful payment integrations with DiskPays.',
    keywords: 'payment API, payment gateway, payment processing, fintech, SDK, REST API, SOAP API',
    authors: [{ name: 'DiskPays' }],
    openGraph: {
        title: 'DiskPays Developer Central',
        description: 'Enterprise-grade payment processing APIs and documentation',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#050507" />
            </head>
            <body>
                {children}
                <Chatbot />
            </body>
        </html>
    )
}

