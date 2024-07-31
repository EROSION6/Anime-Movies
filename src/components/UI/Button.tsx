import React from 'react'

interface IButtonProps {
	children: React.ReactNode
	styles?: string
	onClick?: (value: any) => void
}

export const Button = ({
	children,
	styles,
	onClick,
	...props
}: IButtonProps) => {
	return (
		<div
			{...props}
			className={`px-4 py-2 bg-gray-300 rounded-lg text-white-100 cursor-pointer ${styles} text-center`}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
