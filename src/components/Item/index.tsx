import { MovieCard } from '@/types'
import { ThumbsDown, ThumbsUp } from 'lucide-react'

interface ItemProps {
	anime: MovieCard
}

export const Item = ({ anime }: ItemProps) => (
	<article className={`w-60 h-auto relative rounded-xl cursor-pointer`}>
		<div className='w-full flex items-center justify-center'>
			<img
				src={anime.images.webp.image_url}
				alt={anime.title}
				className='w-full h-[22rem] object-cover rounded-xl'
				style={{ filter: ' brightness(90%)' }}
			/>
			<div className='absolute bottom-3 flex items-center gap-x-7'>
				<div className='space-x-2'>
					<button className='px-3 py-2 rounded-md bg-green-300'>
						<ThumbsUp color='white' size={20} />
					</button>
					<b className='text-white-100'>1</b>
				</div>
				<div className='space-x-2'>
					<button className='px-3 py-2 rounded-md bg-pink-200'>
						<ThumbsDown color='white' size={20} />
					</button>
					<b className='text-white-100'>0</b>
				</div>
			</div>
		</div>
		<span className='w-12 h-7 flex items-center justify-center bg-white-100 absolute top-2 left-2 rounded-tl-md rounded-tr-md rounded-br-md text-base text-gray-300'>
			10
		</span>
	</article>
)
