import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '../components'

function Layout({ children }) {
    return (
        <div className="">
            <Head>
                <title>Scentify</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
