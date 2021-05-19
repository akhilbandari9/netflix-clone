import { Button, Container, Input, Break, Text } from './styles/optform'

const OptForm = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}

OptForm.Button = ({ children, ...restProps }) => (
	<Button {...restProps}>
		{children} <img src='/images/icons/chevron-right.png' alt='Try Now' />{' '}
	</Button>
)
OptForm.Input = ({ children, ...restProps }) => (
	<Input {...restProps}>{children}</Input>
)

OptForm.Break = ({ children, ...restProps }) => <Break {...restProps} />

OptForm.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
)

export default OptForm
