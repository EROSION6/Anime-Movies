import { advantages, categories } from '@/data'
import { fetchMoviesData } from '@/store/getAllMovies'
import { TypeCategories } from '@/types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

export const Movies = () => {
	const [isActive, setActive] = useState('Все')
	const [currentPage, setCurrentPage] = useState(1)
	const { getMovies, movies } = fetchMoviesData

	// search movies
	useEffect(() => {
		getMovies(`${currentPage}`)
	}, [currentPage])

	const handleCurrentPage = (
		page: TypeCategories['page'],
		category: string
	) => {
		setCurrentPage(page)
		setActive(category)
	}

	return (
		<main className='px-4 mt-16 lg:px-0'>
			{/* Categories */}
			<nav className='space-x-8 border-b border-white-200 pb-4  xl:hidden'>
				{categories.map((cat, i) => (
					<Link
						className='text-gray-400 font-normal text-[1.3em] hover:text-gray-200 transition duration-300'
						key={i}
						to='#'
						style={{ color: isActive === cat.category ? '#87959F' : '#444444' }}
						onClick={() => handleCurrentPage(cat.page, cat.category)}
					>
						{cat.category}
					</Link>
				))}
			</nav>
			<section className='pt-6'>
				<h1 className='text-[1.3em] text-gray-400 font-normal pb-6'>
					Пользователи рекомендуют
				</h1>
				{/* card */}
				<div
					className={`w-full grid grid-cols-6 auto-rows-max ${'grid'} gap-4`}
				>
					{movies.map(m => (
						<Link to={`/item/${m.mal_id}`} key={m.mal_id}>
							<Card {...m} />
						</Link>
					))}
				</div>
			</section>
			<div className='mt-12 space-y-10'>
				<div>
					<h1 className='text-[1.3em] text-gray-400 font-normal pb-4'>
						Пользователи рекомендуют
					</h1>
					<p className='text-gray-200 mb-2 md:text-sm'>
						Наш сайт предоставляет прекрасную возможность смотреть аниме онлайн.
						Сама японская анимации обладает способностью мгновенно захватывать
						внимание и может открыть для зрителей совершенно новый мир. Мы
						предлагаем невероятный выбор аниме сериалов и фильмов, каждая из
						которых имеет свои преимущества:
					</p>
					<ul className='space-y-1'>
						{advantages.map((ad, i) => (
							<li key={i} className='text-gray-200 ml-10 list-disc md:text-sm'>
								{ad}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h1 className='text-[1.3em] text-gray-400 font-normal pb-4'>
						Сайт для просмотра аниме
					</h1>
					<p className='text-gray-200 mb-2 md:text-sm'>
						Раньше пользователи скачивали различные приложение на мобильный
						телефон, но большая часть аудитории хочет смотреть аниме онлайн на
						ПК или ТВ. Для таких целей мы создали наш сайт Anixart.net, чтобы
						аудитории и любителям аниме было комфортно смотреть свои любимые
						сериалы. В нашей коллекции аниме можно найти сериалы и фильмы на
						любой вкус. Мы готовы открыть для зрителя и любителей анимации новый
						мир с яркими красками. Все видео на сайте в хорошем качестве, а
						озвучка героев аниме выражает искриние эмоции. Желаем Вам приятного
						просмотра!
					</p>
				</div>
			</div>
		</main>
	)
}
