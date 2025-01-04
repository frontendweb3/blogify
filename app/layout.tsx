import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans'
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono'
})

export const metadata: Metadata = {
    title: 'Home | Blogify',
    description:
        'Blogify is an open-source nextjs blog template design with tailwind CSS.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-grid-small-black/5 dark:bg-grid-small-white/5`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
