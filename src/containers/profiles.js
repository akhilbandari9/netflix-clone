import { HOME } from '../constants/routes'
import { Header } from '../components'
import logo from '../logo.svg'
import { Profiles } from '../components'

const SelectProfileContainer = ({ user, setProfile }) => {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={HOME} src={logo} alt='Netflix' />
				</Header.Frame>
			</Header>

			<Profiles>
				<Profiles.Title>Who's Watching ?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photURL: user.photoURL,
							})
						}
					>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	)
}

export default SelectProfileContainer
