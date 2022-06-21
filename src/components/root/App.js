import React from 'react'
import "../../scss/style.scss"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Routes, Route } from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import WebniarPage from '../WebniarPage/WebniarPage';
import PricingPage from '../PricingPage/PricingPage';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route index path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/services" element={<ServicesPage></ServicesPage>}></Route>
            <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
            <Route path="/webniar" element={<WebniarPage></WebniarPage>}></Route>
            <Route index path="/contactus" element={<ContactUsPage></ContactUsPage>}></Route>
        </Routes>

        <Footer></Footer>
    </div>
  )
}

export default App