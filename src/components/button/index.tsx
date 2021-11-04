import React from 'react'
import './style.css'

interface iProps {
	onClick(e: React.MouseEvent<HTMLButtonElement>): void
	text: string;
	className?: string;
}

export default function Button(props: iProps) {
	return <button onClick={props.onClick} className={props.className}>{props.text}</button>
}
