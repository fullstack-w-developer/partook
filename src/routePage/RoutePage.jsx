import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Donait from "../pages/Donait";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Guide from "../pages/Guide";
import Register from '../pages/Register';
import Login from '../pages/Login';
import Articles from '../pages/Articles';
import TermsAndConditions from '../pages/TermsAndConditions';
import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Tab/Profile';
import ArticlesPage from '../pages/ArticlesPage';
import UserPanel from "../pages/UserPanel";
import Payment from '../pages/Payment';
import VerifyAccount from '../pages/VerifyAccount';

const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="donait" element={<Donait />} />
                <Route path='contact' element={<Contact />} />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='faq' element={<FAQ />} />
                <Route path='guide' element={<Guide />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='donait/articles' element={<Articles />} />
                <Route path='donait/termsandconditions' element={<TermsAndConditions />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='profile' element={<Profile />} />
                <Route path="articlespage" element={<ArticlesPage />} />
                <Route path="userpanel" element={<UserPanel />} />
                <Route path="payment" element={<Payment />} />
                <Route path="register/verifyaccount" element={<VerifyAccount />} />
            </Routes>
        </div>
    )
}

export default RoutePage