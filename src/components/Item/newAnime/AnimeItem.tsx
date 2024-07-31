interface NewItemProps {
	images: {
		webp: {
			image_url: string
		}
	}
	title: string
}

export const Item = ({ images, title }: NewItemProps) => (
	<div className='w-60 h-16 flex items-center gap-4 rounded-md cursor-pointer hover:scale-105 transition duration-300'>
		<img
			src={images.webp.image_url}
			alt={title}
			className='w-16 h-16 object-cover rounded-xl'
		/>
		<div>
			<h1 className='text-gray-300 text-base'>{`${title.substring(
				0,
				20
			)}...`}</h1>
			<p className='text-sm text-gray-200'>4 серия</p>
		</div>
	</div>
)
