import {
	Container,
	Row,
	Column,
	Link,
	Title,
	Text,
	Break,
} from './styles/footer'

const Footer = ({ children, ...rest }) => {
	return <Container {...rest}>{children}</Container>
}

export default Footer

Footer.Row = ({ children, ...rest }) => <Row {...rest}>{children}</Row>

Footer.Column = ({ children, ...rest }) => <Column {...rest}>{children}</Column>

Footer.Link = ({ children, ...rest }) => <Link {...rest}>{children}</Link>

Footer.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>

Footer.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>

Footer.Break = ({ children, ...rest }) => <Break {...rest} />
