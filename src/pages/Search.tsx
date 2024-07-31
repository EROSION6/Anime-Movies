import { Card } from '@/components/Movies/Card'
import { Button } from '@/components/UI/Button'
import { fetchMoviesData } from '@/store/getAllMovies'
import '@/styles/index.scss'
import { MovieCard } from '@/types'
import React, { useEffect, useState } from 'react'

export const Search = () => {
	const { getMovies, movies } = fetchMoviesData
	const [search, setSearch] = useState('')
	const [filteredMovies, setFilteredMovies] = useState<MovieCard[]>(movies)

	useEffect(() => {
		getMovies()
	}, [])

	const handleStartFilterMovies = () => {
		setFilteredMovies(
			movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
		)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Enter') {
			handleStartFilterMovies()
		}
	}

	return (
		<div className={`w-[1280px] mt-16 ${'home'}`}>
			<h1 className='text-lg font-bold text-brown-400 mb-5'>Поиск по сайту</h1>
			<div className='w-full h-20 flex items-center justify-between gap-6 rounded-md bg-white-100 px-5'>
				<input
					type='text'
					placeholder='Поиск'
					value={search}
					onChange={e => setSearch(e.target.value)}
					className='bg-[white] w-[87%] px-3 py-2 rounded-sm text-gray-200 placeholder:text-gray-200 outline-none'
					onKeyDown={handleKeyDown}
				/>
				<Button styles='w-40 text-center' onClick={handleStartFilterMovies}>
					Начать поиск
				</Button>
			</div>

			<div
				className={`w-full grid grid-cols-6 auto-rows-max ${'grid'} gap-4 mt-10`}
			>
				{filteredMovies.map(mov => (
					<Card key={mov.mal_id} {...mov} />
				))}
			</div>
		</div>
	)
}
