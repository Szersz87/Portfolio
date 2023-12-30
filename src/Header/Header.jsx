import React from "react";
import HamburgerNav from "./HamburgerNav";
import LanguageButton from "./LanguageButton"
import MainNavi from "./MainNavi";

export default function Header(){
    return (
        <div className="NavBar">
            <LanguageButton />
            <MainNavi />
            <HamburgerNav />
        </div>
    )
}