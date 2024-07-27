import '@/styles/index.scss'

export const Card = () => {
	return (
		<article className={`w-56 h-auto rounded-xl  cursor-pointer ${'card'}`}>
			<img
				src='https://anixart.net/uploads/posts/2023-07/51179.webp'
				alt='anime'
				className='w-full h-80 rounded-xl'
			/>
			<div className='text-center mt-4'>
				<h1 className='text-md text-gray-300 font-normal'>Реинкарнация...</h1>
				<p className='text-sm text-gray-200'>2023, 12 серий</p>
			</div>
		</article>
	)
}
