import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AnimeItem } from './pages/AnimeItem'
import { Home } from './pages/Home'

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/AnimeItem' element={<AnimeItem />} />
			</Routes>
		</div>
	)
}

export default App
