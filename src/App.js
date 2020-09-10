import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import Home from './HomePage';
import Main from './Main';
import Region from './Region';
import County from './County';
import Zone from './Zone';



function App() {
	const { countyName } = useParams();
	const { regionName } = useParams();
	return (
		<Switch>
			<Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
			<Route exact path="/map" render={(routeProps) => <Main {...routeProps} />} />
			<Route exact path="/map/region/:regionName" render={(routeProps) => <Region {...routeProps} />} />
			<Route exact path="/map/region/:regionName/prefecture/:countyName" render={(routeProps) => <County {...routeProps} />} />			
			<Route exact path="/map/region/:regionName/prefecture/:countyTitle/:zoneName" render={(routeProps) => <Zone {...routeProps} />} />			
		</Switch>
	);
}

export default App;
