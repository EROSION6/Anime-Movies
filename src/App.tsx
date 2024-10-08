import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { AnimeItem } from './pages/AnimeItem'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

const App = () => {
	return (
		<div className='w-full flex items-center flex-col'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/item/:id' element={<AnimeItem />} />
				<Route path='/search' element={<Search />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
