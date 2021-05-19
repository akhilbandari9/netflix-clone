import { ButtonLink, Logo, Container, Background } from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom'
import logo from '../../logo.svg'
const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
)

Header.Logo = ({ to, ...restProps }) => (
	<ReactRouterLink to={to}>
		<Logo {...restProps} alt='Netflix' src={logo} />
	</ReactRouterLink>
)

Header.Frame = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
)
Header.ButtonLink = ({ children, ...restProps }) => (
	<ButtonLink {...restProps}>{children}</ButtonLink>
)

export default Header
