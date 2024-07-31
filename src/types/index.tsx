export type MovieCard = {
	mal_id?: number
	images: {
		webp: {
			image_url: string
		}
	}
	title: string
	episodes: number
	score: number
	aired: {
		prop: {
			from: {
				year: number
			}
		}
	}
	trailer?: {
		youtube_id: string
	}
	status?: string
	duration?: string
	studios: {
		name?: string
	}
	synopsis?: string
}

export type TypeCategories = {
	category: string
	page: number | (() => void)
}

export type TypeComments = {
	id: number
	comment: string
}
