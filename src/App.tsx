import { StoreProvider } from './store';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TrackSection from './components/TrackSection';
import ProjectsSection from './components/ProjectsSection';
import LanguagesSection from './components/LanguagesSection';
import SiteFooter from './components/SiteFooter';
import Modal from './components/Modal';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Nav />
      <Hero />
      <TrackSection />
      <ProjectsSection />
      <LanguagesSection />
      <SiteFooter />
      <Modal />
    </StoreProvider>
  );
}

export default App;
