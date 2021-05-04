import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

// import './App.css';

function App() {

  const [categories] = useState([
    { name: 'ABOUT' },
    { name: 'PORTFOLIO' },
    { name: 'CONTACT' },
    { name: 'RESUME' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
 
  return (
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
