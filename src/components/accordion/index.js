import { useState, useContext, createContext } from 'react'
import { Container, Header, Body, Title, Item, Inner } from './styles/accordion'

const ToggleContext = createContext()

const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	)
}

export default Accordion

Accordion.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
)

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false)

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	)
}

Accordion.Header = function AccordianHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	return (
		<Header onClick={() => setToggleShow((prev) => !prev)} {...restProps}>
			{children}
			{toggleShow ? (
				<img src='/images/icons/close-slim.png' alt='Close' />
			) : (
				<img src='/images/icons/add.png' alt='Open' />
			)}
		</Header>
	)
}

Accordion.Body = function AccordianBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext)
	return (
		<Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
			<span>{children}</span>
		</Body>
	)
}
