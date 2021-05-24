import { Container, Close, Button, Inner, Overlay } from './styles/player'
import { useContext, createContext, useState } from 'react'
import ReactDOM from 'react-dom'

export const PlayerContext = createContext()

const Player = ({ children, ...restProps }) => {
	const [showPlayer, setShowPlayer] = useState(false)

	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	)
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext)

	return (
		showPlayer &&
		ReactDOM.createPortal(
			<Overlay onClick={() => setShowPlayer(false)}>
				<Inner {...restProps}>
					<video id='netflix-player' controls>
						<source src={src} type='video/mp4' />
					</video>
					<Close />
				</Inner>
			</Overlay>,
			document.body
		)
	)
}

Player.Button = function PlayerButton({ ...restProps }) {
	const { setShowPlayer } = useContext(PlayerContext)

	return (
		<Button onClick={() => setShowPlayer((prev) => !prev)} {...restProps}>
			Play
		</Button>
	)
}

export default Player
