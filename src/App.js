import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Recipe Library</h1>
      <p className="mb-4">Are you hungry? Hello</p>

      <Link
        to="/test"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Me!
      </Link>

      {/* TODO: Create route to "/test" using React Router v6, make it render a simple element to screen */}
    </div>
  );
}

export default App;
