import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import Home from './HomePage';
import Main from './Main';
import Region from './Region';
import County from './County';
import Zone from './Zone';
import FormBlog from './FormBlog';
// import {MongoClient} from'mongodb';

// const uri = "mongodb+srv://val:simatnoght@japanblog.sjfqd.gcp.mongodb.net/japan?retryWrites=true&w=majority"
// connect();

// async function connect(){
  	
// 	const client = new MongoClient(uri, { useNewUrlParser: true }); 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
// 		const db =  client.db("japan");
// 		console.log(`Connect to database ${db.databaseName}`);
		  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

function App() {
	const { countyName } = useParams();
	const { regionName } = useParams();
	return (
		<Switch>
			<Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
			<Route exact path="/map" render={(routeProps) => <Main {...routeProps} />} />
			<Route exact path="/map/region/:regionName" render={(routeProps) => <Region {...routeProps} />} />
			<Route exact path="/map/region/:regionName/prefecture/:countyName" render={(routeProps) => <County {...routeProps} />} />			
			<Route exact path="/map/region/:regionName/prefecture/:countyName/:zoneName" render={(routeProps) => <Zone {...routeProps} />} />			
			<Route exact path="/map/region/:regionName/prefecture/:countyName/:zoneName/form" render={(routeProps) => <FormBlog {...routeProps} />} />			
		</Switch>
	);
}

export default App;