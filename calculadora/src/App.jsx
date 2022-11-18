import { useState } from 'react'
import { evaluate } from 'mathjs'
import { words } from 'lodash/string'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
	const [ stack, setStack ] = useState('')
	const items = words(stack, /[^-^+^*^/]+/g)
	const valueResult = items.length ? items[items.length-1] : ''
	return (
		<main className='react-calculator'>
			<Result value={valueResult} />
			<Numbers
				onClickNumber={(number) => {
					setStack(`${stack}${number}`)
				}}
			/>
			<Functions
				onContentClear={() => {
					setStack('')
				}}
				onDelete={() => {
					if (stack.length) {
						const newStack = stack.substring(0, stack.length -1)
						setStack(newStack)
					}
				}}
			/>
			<MathOperations
				onClickOperation={(operation) => {
					setStack(`${stack}${operation}`)
				}}
				onClickEqual={() => {
					if (stack.length && stack !== '0') {
						const result = evaluate(stack).toString()
						setStack(result)
					}
				}}
			/>
		</main>
	)
}

export default App
