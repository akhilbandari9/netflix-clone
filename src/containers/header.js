import { Header } from '../components'

import { SIGNIN, HOME } from '../constants/routes'
const HeaderContainer = ({ children }) => {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={HOME} />
				<Header.ButtonLink to={SIGNIN}>Sign In</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	)
}

export default HeaderContainer
