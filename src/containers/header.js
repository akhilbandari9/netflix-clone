import { Header } from '../components'

import * as ROUTES from '../constants/routes'
const HeaderContainer = ({ children }) => {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} />
				<Header.ButtonLink>Sign In</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	)
}

export default HeaderContainer
