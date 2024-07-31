import { MovieCard } from '@/types'
import { makeAutoObservable } from 'mobx'

class createBookmarks {
	bookmarks: MovieCard[] = []
	constructor() {
		makeAutoObservable(this)
	}

	addBookmarks(body: MovieCard) {
		this.bookmarks.push(body)
	}

	deleteBookmarks(id: MovieCard['mal_id']) {
		this.bookmarks = this.bookmarks.filter(book => book.mal_id !== id)
	}

	getBookmarks() {
		return this.bookmarks
	}
}

export const bookmarkStore = new createBookmarks()
