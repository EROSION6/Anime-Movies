import { Item } from '@/components/Item'
import { Comment } from '@/components/Item/comment'
import { Info } from '@/components/Item/Info'
import { NewAnime } from '@/components/Item/newAnime'
import { Button } from '@/components/UI/Button'
import { bookmarkStore } from '@/store/bookmarks'
import '@/styles/index.scss'
import { MovieCard } from '@/types'
import { CirclePlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const AnimeItem = () => {
	const [anime, setAnime] = useState<MovieCard | null>(null)
	const { id } = useParams()

	const getInfoAnime = async () => {
		try {
			const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
			if (!res.ok) {
				throw new Error('Fetching error')
			}
			const data = await res.json()
			setAnime(data.data)
		} catch (error) {
			console.error('Error fetching anime:', error)
		}
	}

	useEffect(() => {
		getInfoAnime()
	}, [id])

	if (!anime) {
		return <h1>Loading...</h1>
	}

	return (
		<div className='w-[1280px] mt-16 home flex gap-8 md:flex-col md:items-center'>
			<div>
				<Item anime={anime} />
				<Button
					styles='flex items-center gap-2 mt-4 font-semibold'
					onClick={() => bookmarkStore.addBookmarks(anime)}
				>
					<CirclePlus color='white' size={20} />
					Добавить в избранное
				</Button>
				<NewAnime />
			</div>
			<div>
				<Info anime={anime} />
				<Comment />
			</div>
		</div>
	)
}
