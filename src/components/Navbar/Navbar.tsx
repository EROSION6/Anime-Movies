import logo from '@/assets/logo.svg'
import telegram from '@/assets/telegram.svg'
import { AlignJustify } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../UI/Button'
import { ModalAuth } from './auth/ModalAuth'

export const Navbar = () => {
	const navigation = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isOpen, setOpen] = useState(false)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Enter') {
			navigation('/search')
		}
	}

	const submit: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()

		if (email === '' || password === '') {
			alert('Заполните все поля')
		} else {
			setOpen(false)
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
						<img src={logo} alt='logo' className='w-10 h-10 lg:w-8 lg:h-8' />
						<h1 className='text-brown-400 text-2xl font-bold uppercase lg:text-xl'>
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
				<Link
					to='https://t.me/chocks92'
					className='flex items-center justify-center bg-gray-300 rounded-full p-2 cursor-pointer'
				>
					<img
						src={telegram}
						alt='telegram'
						className='w-6 h-6'
						loading='lazy'
					/>
				</Link>
				<Button onClick={() => setOpen(true)}>Войти</Button>
			</div>
			<ModalAuth
				email={email}
				password={password}
				setEmail={setEmail}
				setPassword={setPassword}
				isOpen={isOpen}
				submit={submit}
				setOpen={setOpen}
			/>
		</header>
	)
}
