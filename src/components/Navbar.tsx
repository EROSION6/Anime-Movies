import logo from '@/assets/logo.svg'
import telegram from '@/assets/telegram.svg'
import { AlignJustify } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './UI/Button'

export const Navbar = () => {
	const navigation = useNavigate()

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Enter') {
			navigation('/search')
		}
	}
	return (
		<header
			className={`w-[1280px] flex justify-between border-b border-white-200 py-4  ${'home'}`}
		>
			<div className='flex items-center gap-4'>
				<button>
					<AlignJustify size={26} color='#6A6A6A' />
				</button>
				<Link to={'/'}>
					<div className='flex items-center'>
						<img src={logo} alt='logo' className='w-12 h-12 lg:w-8 lg:h-8' />
						<h1 className='text-brown-400 text-3xl font-bold uppercase lg:text-xl'>
							Anixart.net
						</h1>
					</div>
				</Link>
				<div className='lg:hidden'>
					<input
						type='text'
						placeholder='Найти аниме..'
						className='w-[24rem] py-1 px-3 bg-white-100 rounded-lg border  outline-none border-[#c4c4c4] text-gray-200 placeholder:text-gray-200 lg:w-full'
						onKeyDown={handleKeyDown}
					/>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<span className='flex items-center justify-center bg-gray-300 rounded-full p-2 cursor-pointer'>
					<img src={telegram} alt='telegram' className='w-6 h-6' />
				</span>
				<Button>Войти</Button>
			</div>
		</header>
	)
}
