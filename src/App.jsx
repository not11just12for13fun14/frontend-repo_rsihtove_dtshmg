import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Catalog />
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Electro. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
