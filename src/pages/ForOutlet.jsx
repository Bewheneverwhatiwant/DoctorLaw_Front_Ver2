import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import React, { useState, createContext, useContext } from 'react';

export default function Component() {
    const [backSetting, setBackSetting] = useState(true);

    const handleBackSetting = setting => {
        setBackSetting(setting);
    };

    const FunctionContext = createContext();

    return (
        <>
            <Header $background={backSetting} />
            <Outlet $setting={handleBackSetting} />
            <Footer />
        </>
    )
};