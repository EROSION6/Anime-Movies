import { TypeComments } from '@/types'
import { makeAutoObservable } from 'mobx'

class CreateComment {
	comments: TypeComments[] = []

	constructor() {
		makeAutoObservable(this)
	}

	addComment(body: TypeComments) {
		this.comments.push(body)
	}

	deleteComment(id: TypeComments['id']) {
		this.comments = this.comments.filter(com => com.id !== id)
	}

	updateComment(id: TypeComments['id'], comment: TypeComments['comment']) {
		this.comments = this.comments.map(com => {
			if (com.id === id) {
				return { ...com, comment }
			}
			return com
		})
	}
}

export const commentStore = new CreateComment()
