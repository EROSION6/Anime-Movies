import React from 'react'

interface ModalProps {
	children: React.ReactNode
	onClick?: () => void
	styles?: string
	isOpen?: boolean
}

export const Modal = ({
	children,
	styles,
	onClick,
	isOpen,
	...props
}: ModalProps) => {
	return (
		<div
			className={`w-full h-screen fixed bg-[rgba(0,0,0,0.5)] inset-0 z-10 flex items-center justify-center ${
				isOpen
					? 'transform-y-0 transition-transform duration-300'
					: '-translate-y-[100%] transition-transform duration-300'
			}`}
			{...props}
			onClick={onClick}
		>
			<div
				className={`relative w-1/4 h-auto bg-white-100 bg-opacity-50 rounded-md p-2`}
			>
				{children}
			</div>
		</div>
	)
}
