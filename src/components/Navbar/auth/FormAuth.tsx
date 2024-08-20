import { Button } from '../../UI/Button'

interface IFormAuthProps {
	email: string
	setEmail: (value: string) => void
	password: string
	setPassword: (value: string) => void
	submit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const FormAuth = ({
	email,
	setEmail,
	password,
	setPassword,
	submit,
}: IFormAuthProps) => (
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
)
