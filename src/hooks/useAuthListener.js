import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

const useAuthListener = () => {
	const [user, setUser] = useState(() =>
		JSON.parse(localStorage.getItem('authUser'))
	)
	const { firebase } = useContext(FirebaseContext)

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem(
					'authUser',
					JSON.stringify(authUser.providerData[0])
				)
				setUser(authUser.providerData[0])
			} else {
				localStorage.removeItem('authUser')
				setUser(null)
			}
		})

		return () => listener()
	}, [])

	return { user }
}

export default useAuthListener
