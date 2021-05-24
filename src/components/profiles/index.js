import { Container, Title, List, Item, Picture, Name } from './styles/profiles'

const Profiles = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>
}

Profiles.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
)
Profiles.List = ({ children, ...restProps }) => (
	<List {...restProps}>{children}</List>
)
Profiles.User = ({ children, ...restProps }) => (
	<Item {...restProps}>{children}</Item>
)
Profiles.Picture = ({ src, ...restProps }) => (
	<Picture
		{...restProps}
		src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
	/>
)
Profiles.Name = ({ children, ...restProps }) => (
	<Name {...restProps}>{children}</Name>
)
export default Profiles
