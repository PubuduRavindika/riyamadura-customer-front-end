import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SellVehicles from './components/SellVehicles';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <SellVehicles />
          <Features />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
