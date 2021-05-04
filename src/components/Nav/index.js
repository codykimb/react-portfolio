import React, { useEffect } from 'react';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

    useEffect(() => {
    document.title = currentCategory.name;
    }, [currentCategory]);

  return (
    <header>
        <h1>
            <a href="index.html">CODY KIMBELL</a>
        </h1>
        <nav>
            <ul>
                {categories.map((category) => (
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
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;