import { Button } from '@/components/UI/Button'
import { commentStore } from '@/store/comment'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { CommentItem } from './CommentItem'

export const Comment = observer(() => {
	const [title, setTitle] = useState('')
	const [editTitle, setEditTitle] = useState(false)

	const handleAddComment: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()
		const body = {
			id: Math.floor(Math.random() * 1000),
			comment: title,
		}
		if (title === '') return alert('Поле пустое')
		else {
			commentStore.addComment(body)
			setTitle('')
		}
	}

	const handleDeleteComment = (id: number) => {
		commentStore.deleteComment(id)
	}

	const handleEditTitleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Enter') {
			setEditTitle(false)
		}
	}

	const handleUpdateTitle = (id: number, comment: string) => {
		commentStore.updateComment(id, comment)
	}

	return (
		<div className='mt-10'>
			<h1 className='text-[1.3em] text-gray-400 font-normal'>Комментарии</h1>
			<div className='flex mt-4 gap-2'>
				<input
					type='text'
					placeholder='Напишите коммент'
					value={title}
					onChange={e => setTitle(e.target.value)}
					className='w-[90%] px-3 py-2 border border-gray-200 rounded-md text-gray-200 text-md outline-none'
				/>
				<Button onClick={handleAddComment}>Добавить</Button>
			</div>
			<div className='w-full h-72 overflow-y-scroll mt-8 space-y-2'>
				{commentStore.comments.map(com => (
					<CommentItem
						key={com.id}
						{...com}
						handleDeleteComment={handleDeleteComment}
						handleEditTitleKey={handleEditTitleKey}
						handleUpdateTitle={handleUpdateTitle}
						editTitle={editTitle}
						setEditTitle={setEditTitle}
						title={title}
					/>
				))}
			</div>
		</div>
	)
})
