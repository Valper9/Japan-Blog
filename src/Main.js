import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import NavBar from './Navbar';
import './Main.css';
import {Map} from './Map'
import {counties, regions} from './dataLocal';

function Main() {
	const history = useHistory();
	const [currentZoneHover, setCurrentZoneHover] = useState("");
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
								currentZoneHover={currentZoneHover}
							/>
						</div>						
						<div className="Map_legende">
      						<ListGroup className="Map_List" variant='flush'>
								  <ListGroup.Item disabled style={{backgroundColor: "rgb(201, 197, 185)"}}>Les régions du Japon</ListGroup.Item>
								  {regions.map( (r) => (
										<ListGroup.Item 
										  className="Map_list_item" 
										  key={r.id}
										  onMouseOver={() => {
											  let regionHover = counties.filter((c) => c.region === r.id)
											  setCurrentZoneHover(regionHover);
											  console.log(currentZoneHover);
										  }} 
										  href={`/map/region/${r.id.toLowerCase()}`} 
										  action 
										  style={{backgroundColor: r.color}}
										>
											{r.id}
										</ListGroup.Item>
									))}
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
