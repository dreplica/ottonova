import React from 'react'
import Render from './render-widget'

interface props {widget: HTMLDivElement, rest?: React.PropsWithChildren<any>}

function App({widget}: props) {
		return (<Render widget={widget}/>
		)
} 
 
export default App
