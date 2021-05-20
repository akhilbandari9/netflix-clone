import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import { BROWSE, SIGNIN } from '../constants/routes'

const Signup = () => {
	const { firebase } = useContext(FirebaseContext)
	const history = useHistory()
	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const isInvalid = firstName === '' || password === '' || email === ''

	const handleSignUp = (e) => {
		e.preventDefault()

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(BROWSE)
					})
			})
			.catch((error) => {
				setFirstName('')
				setPassword('')
				setEmail('')
				setError(error.message)
			})
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method='POST'>
						<Form.Input
							placeholder='First Name'
							onChange={({ target }) => setFirstName(target.value)}
							value={firstName}
						/>
						<Form.Input
							placeholder='Email Address'
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						<Form.Input
							placeholder='Password'
							onChange={({ target }) => setPassword(target.value)}
							value={password}
						/>
						<Form.Submit disabled={isInvalid} type='submit'>
							Sign Up
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						Already a user? <Form.Link to={SIGNIN}>Sign In </Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}

export default Signup
