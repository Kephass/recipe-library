import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing";
import Recipes from "./Pages/Recipes";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/test" element={<h1>I'am test page!</h1>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <nav className="buttons mx-auto text-center">
          <Link
            to="/test"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Test
          </Link>
          <Link
            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/recipes"
          >
            Recipes
          </Link>
        </nav>
      </Router>

      {/* TODO: Create route to "/test" using React Router v6, make it render a simple element to screen */}
    </div>
  );
}

export default App;
