import React, { useState } from "react";
import { LuAtom, LuMenu, LuX } from "react-icons/lu";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Overview", href: "#overview" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-5 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="flex items-center gap-12">
                    <a href="/" className="text-white">
                        <LuAtom size={30} />
                    </a>

                    <ul className="hidden md:flex items-center gap-8 text-white font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-[16px] hover:text-gray-300 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="hidden md:block bg-white text-black font-semibold px-5 py-2 rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer">
                    Sign in
                </button>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="md:hidden text-white relative z-[60]"
                >
                    {isOpen ? (
                        <LuX size={23} />
                    ) : (
                        <LuMenu size={23} />
                    )}
                </button>
            </div>

            <div
                className={`md:hidden fixed top-0 right-0 h-screen w-[75%] max-w-sm
                bg-black/60 backdrop-blur-xl border-l border-white/10
                transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col h-full justify-center px-8">

                    <ul className="flex flex-col gap-8 text-white text-[14px] font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block hover:text-gray-300 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={closeMenu}
                        className="mt-10 w-full bg-white text-black font-semibold py-3 text-[14px] rounded-full transition-transform duration-300 hover:scale-105"
                    >
                        Sign in
                    </button>
                </div>
            </div>

            <div
                onClick={closeMenu}
                className={`md:hidden fixed inset-0 bg-white/10
                transition-opacity duration-500
                ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            />
        </nav>
    );
}

export default Navbar;