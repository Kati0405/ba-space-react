import React from 'react'
import Header from './Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../container/App.css'
import '../container/reset.css'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
