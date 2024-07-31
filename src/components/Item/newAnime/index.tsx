import { fetchMoviesData } from '@/store/getAllMovies'
import { useEffect } from 'react'
import { Item } from './AnimeItem'

export const NewAnime = () => {
	useEffect(() => {
		fetchMoviesData.getMovies(6)
	}, [])
	return (
		<div className='mt-10 md:hidden'>
			<h1 className='text-[1.3em] text-gray-400 font-normal pb-6'>Новинки</h1>

			<div className='space-y-4'>
				{fetchMoviesData.movies.slice(0, 5).map(mov => (
					<Item key={mov.mal_id} {...mov} />
				))}
			</div>
		</div>
	)
}
