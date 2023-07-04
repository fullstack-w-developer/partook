import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </div>
    )
}

export default RoutePage