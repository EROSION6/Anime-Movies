import '@/styles/index.scss'
import { Play } from 'lucide-react'

interface iCardProps {
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
}

export const Card = ({ images, title, episodes, score, aired }: iCardProps) => (
	<article
		className={`w-48 h-auto relative rounded-xl cursor-pointer ${'card'}`}
	>
		<div className='w-full flex items-center justify-center'>
			<img
				src={images.webp.image_url}
				alt='anime'
				loading='lazy'
				className='w-full h-72 object-cover rounded-xl'
			/>
			<button
				className={`absolute border-[.16rem] bg-transparent border-white-100 rounded-full p-4 ${'opacity'}`}
			>
				<Play size={35} color='white' />
			</button>
		</div>
		<span className='w-12 h-7 flex items-center justify-center bg-white-100 absolute top-2 left-2 rounded-tl-md rounded-tr-md rounded-br-md text-base text-gray-300'>
			{score}
		</span>
		<div className='text-center mt-4'>
			<h1 className='text-md text-gray-300 font-normal'>{title}...</h1>
			<p className='text-sm text-gray-200'>
				{aired?.prop?.from?.year}, {episodes} серий
			</p>
		</div>
	</article>
)
