import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  const { i18n } = useTranslation();

  // Update document language when language changes
  const updateDocumentLanguage = () => {
    document.documentElement.lang = i18n.language;
  };

  i18n.on('languageChanged', updateDocumentLanguage);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
