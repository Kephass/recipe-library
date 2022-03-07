import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './Components/Layout/Navigation';
import {
  Categories,
  ErrorPage,
  Landing,
  Recipe,
  Recipes,
  Search,
  Test,
  UserProfile,
} from './Pages';

function App() {
  return (
    <Box maxW='1200px' bg='#28282B' h='100%' mx='auto'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:recipeId' element={<Recipe />} />
          <Route path='/users/:userId' element={<UserProfile />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Navigation />
      </Router>
    </Box>
  );
}

export default App;
