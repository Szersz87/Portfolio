import React from "react";
import HamburgerNav from "./HamburgerNav";
import LanguageButton from "./LanguageButton"

export default function Header(){
    return (
        <div className="NavBar">
            <LanguageButton />
            <HamburgerNav />
        </div>
    )
}