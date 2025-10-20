import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Flashcards } from './pages/Flashcards';
import { Quiz } from './pages/Quiz';
import { Tracker } from './pages/Tracker';
import { Motivation } from './pages/Motivation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'flashcards':
        return <Flashcards />;
      case 'quiz':
        return <Quiz />;
      case 'tracker':
        return <Tracker />;
      case 'motivation':
        return <Motivation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
