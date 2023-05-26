import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header/Header'
import Location from "./pages/Location"
import "./AppCss.css"

const App = () => {
    return (
        <BrowserRouter>
            <div id="mainContainer">
            <Routes>
                <Route path="/" element={<><Header /><Home/></>}/>
                <Route path="location/:id" element={<Location/>} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App