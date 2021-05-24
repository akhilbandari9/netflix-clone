import { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import SelectProfileContainer from './profiles'
import FooterContainer from './footer'
import { FirebaseContext } from '../context/firebase'
import { Card, Header, Loading, Player } from '../components'
import { HOME } from '../constants/routes'
import { Logo } from '../components/header/styles/header'

const BrowseContainer = ({ slides }) => {
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')
	const [category, setCategory] = useState('series')
	const [slideRows, setSlideRows] = useState([])

	const { firebase } = useContext(FirebaseContext)
	const user = firebase.auth().currentUser || {}

	useEffect(() => {
		setSlideRows(slides[category])
	}, [slides, category])

	useEffect(() => {
		let timeout = setTimeout(() => {
			setLoading(false)
		}, 2500)
		return () => clearTimeout(timeout)
	}, [profile.displayName])

	useEffect(() => {
		const fuse = new Fuse(slideRows, {
			keys: ['data.description', 'data.title', 'data.genre'],
		})

		const results = fuse.search(searchTerm).map(({ item }) => item)

		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			setSlideRows(results)
		} else {
			setSlideRows(slides[category])
		}
		//eslint-disable-next-line
	}, [searchTerm])

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1' hideBgOnSmallScreen>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={HOME} src={Logo} alt='Netflix' />
						<Header.TextLink
							active={category === 'series' ? true : false}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? true : false}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						></Header.Search>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>

								<Header.Group>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign Out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.Title>Watch Joker Now</Header.Title>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image
										src={`images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src='/videos/bunny.mp4' />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}

export default BrowseContainer
