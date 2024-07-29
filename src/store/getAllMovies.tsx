import { MovieCard } from '@/types'
import { makeAutoObservable } from 'mobx'

class fetchMovies {
	movies: MovieCard[] = []
	isLoading: boolean = false
	isError: null | string = ''
	searchQuery: string = ''
	filteredMovies: MovieCard[] = []

	constructor() {
		makeAutoObservable(this)
	}

	getMovies = async () => {
		try {
			const res = await fetch('https://api.jikan.moe/v4/top/anime')
			if (!res.ok) {
				throw new Error('Fetching response anime error')
			}
			this.isLoading = false
			const data = await res.json()
			this.movies = data.data
		} catch (err) {
			this.isError = `Fething Error ${err}`
			console.error(err)
		}
	}

	searchMovie = (query: string) => {
		this.searchQuery = query
		this.filteredMovies = this.movies.filter(mov =>
			mov.title.toLowerCase().includes(this.searchQuery.toLowerCase())
		)
	}
}

export const fetchMoviesData = new fetchMovies()
