import { categories } from '@/data'
import { NavLink } from 'react-router-dom'
import { Card } from './Card'

export const Movies = () => {
	return (
		<main>
			{/* Categories */}
			<nav className='space-x-8 border-b pb-3'>
				{categories.map((cat, i) => (
					<NavLink
						className='text-gray-400 font-normal text-[1.3em] hover:text-gray-200 transition duration-300'
						key={i}
						to='#'
					>
						{cat}
					</NavLink>
				))}
			</nav>
			<section className='pt-6'>
				<h1 className='text-[1.3em] text-gray-400 font-normal pb-6'>
					Пользователи рекомендуют
				</h1>
				{/* card */}
				<div className='grid grid-cols-5'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</main>
	)
}
