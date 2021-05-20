import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup, NotFound } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

function App() {
	const { user } = useAuthListener()
	console.log(user)
	return (
		<Router>
			<Switch>
				<IsUserRedirect
					exact
					user={user}
					path={ROUTES.HOME}
					loggedInPath={ROUTES.BROWSE}
				>
					<Home />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
					<Browse />
				</ProtectedRoute>

				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					exact
					path={ROUTES.SIGNIN}
				>
					<Signin />
				</IsUserRedirect>

				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					exact
					path={ROUTES.SIGNUP}
				>
					<Signup />
				</IsUserRedirect>

				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App
