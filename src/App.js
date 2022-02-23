import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Layout/Navigation';
import Landing from './Pages/Landing';
import Recipes from './Pages/Recipes';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/test" element={<h1>I'am test page!</h1>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

      {/* TODO: Create route to "/test" using React Router v6, make it render a simple element to screen */}
    </div>
  );
}

export default App;
