import { bookmarkStore } from './store/bookmarks'
import { TypeCategories } from './types'

export const categories: TypeCategories[] = [
	{ category: 'Все', page: 3 },
	{ category: 'Сериалы', page: 5 },
	{ category: 'Онгоинги', page: 3 },
	{ category: 'Фильмы', page: 2 },
	{ category: 'Закладки', page: () => bookmarkStore.getBookmarks() },
]

export const advantages: string[] = [
	'Последние новинки и выход новых серий аниме.',
	'Качественная озвучка и приятный плеер.',
	'Большая база видео сериалов, фильмов, онгоингов аниме.',
	'Удобная мобильная версия сайта.',
]

export const pagination: number[] = [1, 2, 3, 4, 5]
