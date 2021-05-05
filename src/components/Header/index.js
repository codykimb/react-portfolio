import React, { useState } from 'react';
import Nav from "../Nav";

function Header(props) {

    const {
        setCurrentCategory,
        currentCategory      
      } = props;
        
    return (
        <header>
            <h1>
                <a href="/">CODY KIMBELL</a>
            </h1>
            <Nav
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            ></Nav>
        </header>
    );
}

export default Header;