import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import About from './pages/about';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/about" component={About} />
			</Switch>
		</Router>
		
	);
}

export default App;
