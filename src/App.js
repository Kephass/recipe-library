import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navigation from './Components/Layout/Navigation';
import Landing from './Pages/Landing';
import Search from './Pages/Search';
import Recipes from './Pages/Recipes';
import ErrorPage from './Pages/ErrorPage';

function App() {
	return (
		<Box maxW='1200px' bg='#252836' mx='auto'>
			<Router>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/search' element={<Search />} />
					<Route path='/recipes' element={<Recipes />} />
					<Route path='/test' element={<h1>I'am test page!</h1>} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Navigation />
			</Router>

			{/* TODO: Create route to "/test" using React Router v6, make it render a simple element to screen */}
		</Box>
	);
}

export default App;
