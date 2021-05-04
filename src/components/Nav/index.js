import React from 'react';

function Nav() {

    function categorySelected() {
        console.log("sup")
      }

  return (
    <header>
        <h1>
            <a href="index.html">CODY KIMBELL</a>
        </h1>
        <nav>
            <ul>
                <li name = "ABOUT ME" onClick={categorySelected}>
                    <a>ABOUT ME</a>
                </li>
                <li name = "PORTFOLIO" onClick={categorySelected}>
                    <a>PORTFOLIO</a>
                </li>
                <li name = "CONTACT" onClick={categorySelected}>
                    <a>CONTACT</a>
                </li>
                <li name = "RESUME" onClick={categorySelected}>
                    <a>RESUME</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;