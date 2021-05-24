import {
	ButtonLink,
	Logo,
	Container,
	Background,
	Feature,
	Text,
	Title,
	Link,
	Group,
	Picture,
	Profile,
	Dropdown,
	Search,
	SearchIcon,
	SearchInput,
	PlayButton,
} from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom'
import logo from '../../logo.svg'
import { useRef, useState } from 'react'
const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
)

Header.Feature = ({ children, ...restProps }) => (
	<Feature {...restProps}>{children}</Feature>
)

Header.Logo = ({ to, ...restProps }) => (
	<ReactRouterLink to={to}>
		<Logo {...restProps} alt='Netflix' src={logo} />
	</ReactRouterLink>
)

Header.Frame = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
)
Header.Group = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
)
Header.ButtonLink = ({ children, ...restProps }) => (
	<ButtonLink {...restProps}>{children}</ButtonLink>
)
Header.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
)
Header.TextLink = ({ children, ...restProps }) => (
	<Link {...restProps}>{children}</Link>
)
Header.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
)
Header.Picture = ({ src, ...restProps }) => (
	<Picture src={`/images/users/${src}.png`} {...restProps} />
)
Header.Profile = ({ children, ...restProps }) => (
	<Profile {...restProps}>{children}</Profile>
)
Header.Dropdown = ({ children, ...restProps }) => (
	<Dropdown {...restProps}>{children}</Dropdown>
)

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false)
	const searchInputRef = useRef(null)
	const setInputFocus = () => {
		if (searchInputRef && searchInputRef.current) searchInputRef.current.focus()
	}
	return (
		<Search {...restProps}>
			<SearchIcon
				onClick={() => {
					setSearchActive((prev) => !prev)
					setInputFocus()
				}}
			>
				<img src='/images/icons/search.png' alt='Search' />
			</SearchIcon>
			<SearchInput
				ref={searchInputRef}
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder='Search films and series'
				active={searchActive}
				onBlur={() => setSearchActive(false)}
			/>
		</Search>
	)
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>
}

export default Header
