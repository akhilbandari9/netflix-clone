import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import { SIGNUP, BROWSE } from '../constants/routes'

const Signin = () => {
	const { firebase } = useContext(FirebaseContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const history = useHistory()

	// check form input elements are valid

	//
	const handleSignIn = (e) => {
		e.preventDefault()

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				//push to browse page
				history.push(BROWSE)
			})
			.catch((error) => {
				setEmail('')
				setPassword('')
				setError(error.message)
			})
	}

	const isInvalid = password === '' || email === ''
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn} method='POST'>
						<Form.Input
							placeholder='Email Address'
							type='email'
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						<Form.Input
							placeholder='Password'
							type='password'
							onChange={({ target }) => setPassword(target.value)}
							value={password}
						/>
						<Form.Submit disabled={isInvalid} type='submit'>
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to={SIGNUP}>Sign Up </Form.Link>
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

export default Signin
