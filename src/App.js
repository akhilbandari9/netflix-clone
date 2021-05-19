import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup, Error } from './pages'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME} component={Home} />
				<Route exact path={ROUTES.BROWSE} component={Browse} />
				<Route exact path={ROUTES.SIGNIN} component={Signin} />
				<Route exact path={ROUTES.SIGNUP} component={Signup} />
				<Route component={Error} />
			</Switch>
		</Router>
	)
}

export default App
