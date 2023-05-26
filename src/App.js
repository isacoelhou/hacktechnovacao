import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import "./AppCss.css"

const App = () => {
    return (
        <BrowserRouter>
            <div id="mainContainer">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<div/>} />
            </Routes>
            <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App