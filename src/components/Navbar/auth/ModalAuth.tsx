import { Modal } from '@/components/UI/Modal'
import { X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FormAuth } from './FormAuth'

interface IModalProps {
	email: string
	isOpen: boolean
	password: string
	setEmail: (value: string) => void
	setOpen: (value: boolean) => void
	setPassword: (value: string) => void
	submit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const ModalAuth = ({
	email,
	password,
	setEmail,
	setPassword,
	isOpen,
	submit,
	setOpen,
}: IModalProps) => {
	return (
		<Modal isOpen={isOpen}>
			<button
				className='absolute -top-8 -right-8 bg-transparent hover:scale-105 transition duration-300'
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
				{/* // form */}
				<FormAuth
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					submit={submit}
				/>
			</div>
		</Modal>
	)
}
