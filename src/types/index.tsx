export type MovieCard = {
	mal_id?: number
	images: {
		jpg: {
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
}
