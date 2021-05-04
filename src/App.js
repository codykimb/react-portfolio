import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer';
// import './App.css';

function App() {

  const [currentCategory, setCurrentCategory] = useState("ABOUT");
 
  return (
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
      <Nav
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
      {(() => {
        switch (currentCategory) {
          case "ABOUT":   return <About></About>;
          case "PORTFOLIO": return <Portfolio></Portfolio>
          ;
          case "CONTACT":  return <ContactForm></ContactForm>
          ;
          case "RESUME":  return <Resume></Resume>
          ;
          default:      return <About></About>;
        }
      })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
