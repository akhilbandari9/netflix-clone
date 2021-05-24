import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading'

const Loading = ({ src, children, ...restProps }) => {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Picture src={`/images/users/${src}.png`} />
		</Spinner>
	)
}

Loading.ReleaseBody = () => <ReleaseBody />

export default Loading
