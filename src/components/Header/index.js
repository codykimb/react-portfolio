import React, { useState } from 'react';
import Nav from "../Nav";

function Header() {
    
    const [currentCategory, setCurrentCategory] = useState("ABOUT");
    
    return (
        <header>
            <Nav
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            ></Nav>
        </header>
    );
}

export default Header;