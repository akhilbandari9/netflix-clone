import Firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

//config

const config = {
	apiKey: 'AIzaSyAocajTnX_8TwdILjPz-m2Comr30ZagMkM',
	authDomain: 'netflix-clone-fefb0.firebaseapp.com',
	projectId: 'netflix-clone-fefb0',
	storageBucket: 'netflix-clone-fefb0.appspot.com',
	messagingSenderId: '917548938481',
	appId: '1:917548938481:web:0e7dfcdcb90830511aa550',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
