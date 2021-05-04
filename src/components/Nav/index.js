import React, { useEffect } from 'react';

function Nav(props) {

    const {
        setCurrentCategory,
        currentCategory      
      } = props;

    useEffect(() => {
    document.title = currentCategory;
    }, [currentCategory]);

  return (
    <header>
        <h1>
            <a href="index.html">CODY KIMBELL</a>
        </h1>
        <nav>
            <ul>
                {/* {categories.map((category) => (
                <li className={`${
                    currentCategory.name === category.name && 'navActive'
                    }`} key={category.name}>
                <a
                    onClick={() => {
                    setCurrentCategory(category)
                    }}
                >
                    {category.name}
                </a>
                </li>
                ))} */}
                <li className={`${
                    currentCategory === "ABOUT" && 'navActive'
                    }`} key="ABOUT">
                <a
                    onClick={() => {
                    setCurrentCategory("ABOUT")
                    }}
                >
                    ABOUT
                </a>
                </li>
                <li className={`${
                    currentCategory === "PORTFOLIO" && 'navActive'
                    }`} key="PORTFOLIO">
                <a
                    onClick={() => {
                    setCurrentCategory("PORTFOLIO")
                    }}
                >
                    PORTFOLIO
                </a>
                </li>
                <li className={`${
                    currentCategory === "CONTACT" && 'navActive'
                    }`} key="CONTACT">
                <a
                    onClick={() => {
                    setCurrentCategory("CONTACT")
                    }}
                >
                    CONTACT
                </a>
                </li>
                <li className={`${
                    currentCategory === "RESUME" && 'navActive'
                    }`} key="RESUME">
                <a
                    onClick={() => {
                    setCurrentCategory("RESUME")
                    }}
                >
                    RESUME
                </a>
                </li>

            </ul>
        </nav>
    </header>
  );
}

export default Nav;