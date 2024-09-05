import React from "react";
import { FaTelegram } from "react-icons/fa";

const Header = () => {
    return (
        <header className="fixed p-4 w-full bg-yellow-400 flex justify-end md:px-10">
            <a href="">
            <FaTelegram
            className="text-black text-3xl"
            />
            </a>
        </header>
    )
}

export default Header;