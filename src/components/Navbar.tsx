import logo from '@/assets/logo.svg'
import telegram from '@/assets/telegram.svg'
import { AlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './UI/Button'
import { Modal } from './UI/Modal'

interface IModalProps {
	email: string
	isOpen: boolean
	password: string
	setEmail: (value: string) => void
	setOpen: (value: boolean) => void
	setPassword: (value: string) => void
	submit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

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
				<a
					href='https://t.me/chocks92'
					className='flex items-center justify-center bg-gray-300 rounded-full p-2 cursor-pointer'
				>
					<img src={telegram} alt='telegram' className='w-6 h-6' />
				</a>
				<Button onClick={() => setOpen(true)}>Войти</Button>
			</div>
			<IModal
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

const IModal = ({
	email,
	password,
	setEmail,
	setPassword,
	isOpen,
	submit,
	setOpen,
}: IModalProps) => (
	<Modal isOpen={isOpen}>
		<button
			className='absolute -top-8 -right-8 hover:scale-105 transition duration-300'
			onClick={() => setOpen(false)}
		>
			<X color='white' size={35} />
		</button>
		<div className='w-full h-auto bg-white-100 rounded-md py-5 px-10 '>
			<div className='flex items-center gap-4 mb-6 mt-2'>
				<h1 className='text-[1.3em] text-gray-400 font-normal'>Войти</h1>
				<Link to='#' className='text-[1.3em] text-gray-300 font-normal'>
					Регистрация
				</Link>
			</div>
			<form className='flex flex-col gap-4'>
				<label className='flex flex-col text-base text-gray-200 gap-y-2'>
					Логин (e-mail):
					<input
						type='text'
						value={email}
						placeholder='Ваш e-mail'
						onChange={e => setEmail(e.target.value)}
						className='px-3 py-2 rounded-md border border-white-200 outline-none text-base text-gray-200 placeholder:text-gray-200'
					/>
				</label>
				<label className='flex flex-col text-base text-gray-200 gap-y-2'>
					Пароль:
					<input
						type='text'
						value={password}
						placeholder='Ваш пароль'
						onChange={e => setPassword(e.target.value)}
						className='px-3 py-2 rounded-md border border-white-200 outline-none text-base text-gray-200 placeholder:text-gray-200'
					/>
				</label>
				<Button onClick={submit}>Войти</Button>
			</form>
		</div>
	</Modal>
)
