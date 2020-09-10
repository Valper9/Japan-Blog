import React from 'react';
import { useHistory } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import NavBar from './Navbar';
import './Main.css';
import {Map} from './Map'

function Main() {
	const history = useHistory();		 
	return (
		<div className="Map">
			<div>
				<NavBar />
			</div>
			<div>
				<Card className="Map_Card">
					<Card.Title>
						<h1 className="display-4 Map_title">La carte du Japon</h1>
					</Card.Title>
					<Card.Body>
						<Card.Text>
							Cliquez sur la carte pour aller voir ce qu'il y a à découvrir !
						</Card.Text>
						<hr />
					</Card.Body>
					<div className="container Map_map">
						<div className="Map_svg">
						
							<Map
								onCountyClick={(county) => {
									history.push(`/map/region/${county.region.toLowerCase()}/prefecture/${county.title.toLowerCase()}`);
								}}
							/>
						</div>						
						<div className="Map_legende">
      						<ListGroup className="Map_List" variant='flush'>
								<ListGroup.Item href="/map/region/hokkaidō" action style={{backgroundColor: "rgb(247, 211, 167)"}}>Hokkaidō</ListGroup.Item>
								<ListGroup.Item href="/map/region/tōhoku" action  style={{backgroundColor: "rgb(252, 239, 197)"}}>Tōhoku</ListGroup.Item>
								<ListGroup.Item href="/map/region/kantō" action style={{backgroundColor: "rgb(242, 169, 153)"}}>Kantō</ListGroup.Item>
								<ListGroup.Item href="/map/region/chūbu" action style={{backgroundColor: "rgb(187, 223, 175)"}}>Chūbu</ListGroup.Item>
								<ListGroup.Item href="/map/region/kansai" action style={{backgroundColor: "rgb(171, 195, 235)"}}>Kansai</ListGroup.Item>
								<ListGroup.Item href="/map/region/chūgoku" action style={{backgroundColor: "rgb(247, 226, 159)"}}>Chūgoku</ListGroup.Item>
								<ListGroup.Item href="/map/region/shikoku" action style={{backgroundColor: "rgb(192, 186, 229)"}}>Shikoku</ListGroup.Item>
								<ListGroup.Item href="/map/region/kyūshū" action style={{backgroundColor: "rgb(171, 214, 214)"}}>Kyūshū</ListGroup.Item>
								<ListGroup.Item href="/map/region/okinawa" action style={{backgroundColor: "rgb(133, 168, 139)"}}>Okinawa</ListGroup.Item>
							</ListGroup>
        				</div>
					</div>
				</Card>
				<div />
			</div>
		</div>
	);
}

export default Main;
