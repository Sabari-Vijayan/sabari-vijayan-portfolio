import './App.css'
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact.jsx';
import HomePage from './pages/HomePage.jsx';
import Experience from './pages/ExperiencePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {

  return (
    <>
 
      <NavBar />
      <HomePage />
      <ProjectsPage />
      <Experience />
      <ContactPage />
      <Contact />
 
    </>
  )
}

export default App
