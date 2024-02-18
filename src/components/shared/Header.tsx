import React from 'react';

const Header = () => {
    return (
        <header className="md:flex md:justify-between md:items-center md:px-10 py-3 px-4 bg-white shadow">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-700">Logo</h1>
                <div className="md:hidden">
                    <button type="button">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-gray-500">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <nav className="md:block hidden">
                <a href="#" className="px-2 py-1 text-gray-700 rounded hover:bg-gray-200">Home</a>
                <a href="#" className="px-2 py-1 text-gray-700 rounded hover:bg-gray-200">About</a>
                <a href="#" className="px-2 py-1 text-gray-700 rounded hover:bg-gray-200">Contact</a>
            </nav>
        </header>
    );
}

export default Header;