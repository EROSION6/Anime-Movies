import { MovieCard } from '@/types'

interface InfoProps {
	anime: MovieCard
}

export const Info = ({ anime }: InfoProps) => (
	<div>
		<h1 className='text-2xl text-gray-400 font-medium'>{anime.title}</h1>
		<p className='text-gray-400'>MAKE HEROINE GA OOSUGIRU!</p>
		<ul className='space-y-2 mt-7'>
			<li className='text-gray-300'>
				<span className='text-pink-200'>Жанр: </span>
				Комедия, Романтика, Школа
			</li>
			<li className='text-gray-300'>
				<span className='text-pink-200'>Статус: </span>
				{anime.status}
			</li>
			<li className='text-gray-300'>
				<span className='text-pink-200'>Год выхода: </span>
				{anime.aired.prop.from.year}
			</li>
			<li className='text-gray-300'>
				<span className='text-pink-200'>Время серии: </span>
				{anime.duration}
			</li>
			<li className='text-gray-300'>
				<span className='text-pink-200'>Озвучка: </span>
				{anime.studios.name}
			</li>
		</ul>
		<div className='mt-7'>
			<p className='text-gray-300 text-sm'>{anime.synopsis}</p>
		</div>
	</div>
)
