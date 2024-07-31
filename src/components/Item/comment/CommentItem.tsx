import { TypeComments } from '@/types'

interface CommentItemProp {
	title: string
	editTitle: boolean
	id: TypeComments['id']
	comment: TypeComments['comment']
	setEditTitle: (value: boolean) => void
	handleEditTitleKey: (value: any) => void
	handleDeleteComment: (id: number) => void
	handleUpdateTitle: (id: number, comment: string) => void
}

export const CommentItem = ({
	id,
	comment,
	// handleDeleteComment,
	handleEditTitleKey,
	handleUpdateTitle,
	editTitle,
	setEditTitle,
}: CommentItemProp) => (
	<div className='w-full border-b border-white-200 pb-5'>
		<div className='flex items-center gap-3'>
			<img
				src='https://anixart.net/uploads/fotos/foto_12947.webp'
				alt='avatar'
				className='w-10 h-10 rounded-full object-cover'
			/>
			<div className='flex items-center  gap-2'>
				<h1 className='text-base text-gray-300'>SkyFalling</h1>
				<p className='text-sm text-gray-200'>29 мая 2024 12:21</p>
			</div>
		</div>
		<p
			className='ml-12 text-base text-gray-300'
			onClick={() => setEditTitle(true)}
		>
			{!editTitle && comment}
			{editTitle && (
				<input
					type='text'
					value={comment}
					autoFocus
					onBlur={() => setEditTitle(false)}
					className='w-full rounded-md outline-none'
					onChange={e => handleUpdateTitle(id, e.target.value)}
					onKeyDown={handleEditTitleKey}
				/>
			)}
		</p>
	</div>
)
