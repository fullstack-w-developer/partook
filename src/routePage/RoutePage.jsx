import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Donait from "../pages/Donait";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Question from "../pages/Question";
import Guide from "../pages/Guide";
import Login from '../pages/Login';

const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="donait" element={<Donait />} />
                <Route path='contact' element={<Contact />} />
                <Route path='contact' element={<Contact />} /><Route path='aboutus' element={<AboutUs />} />
                <Route path='question' element={<Question />} />
                <Route path='guide' element={<Guide />} />
                <Route path='login' element={<Login />}/>
            </Routes>
        </div>
    )
}

export default RoutePage