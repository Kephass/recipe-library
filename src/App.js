import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './Components/Layout/Navigation';
import {
  ErrorPage,
  Landing,
  Recipe,
  Recipes,
  Search,
  Categories,
  Test,
} from './Pages';

function App() {
  return (
    <Box maxW='1200px' mx='auto'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/recipes/:recipeId' element={<Recipe />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Navigation />
      </Router>
    </Box>
  );
}

export default App;
