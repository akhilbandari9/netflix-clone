import {
	Container,
	Base,
	Error,
	Text,
	Title,
	TextSmall,
	Link,
	Input,
	Submit,
} from './styles/form'

const Form = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}

Form.Error = ({ children, ...restProps }) => (
	<Error {...restProps}>{children}</Error>
)

Form.Base = ({ children, ...restProps }) => (
	<Base {...restProps}>{children}</Base>
)

Form.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
)

Form.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
)

Form.TextSmall = ({ children, ...restProps }) => (
	<TextSmall {...restProps}>{children}</TextSmall>
)

Form.Link = ({ children, ...restProps }) => (
	<Link {...restProps}>{children}</Link>
)

Form.Submit = ({ children, ...restProps }) => (
	<Submit {...restProps}>{children}</Submit>
)

Form.Input = function FormInput({ ...restProps }) {
	return <Input {...restProps} />
}

export default Form
