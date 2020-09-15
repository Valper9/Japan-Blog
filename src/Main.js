import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from './Navbar';
import {Map} from './Map'
import {counties, regions} from './dataLocal';
import './Main.css';

function Main() {
	const history = useHistory();
	const [currentZoneHover, setCurrentZoneHover] = useState("");
	return (
		<div className="Main" >
			<div>
				<NavBar />
			</div>
			<div className="container"  style={{backgroundColor:"white"}}>
				<div className="Main_body text-center">				
					<h1 className="display-4 Main_title">La carte du Japon</h1>			
					<p>Cliquez sur la carte pour aller voir ce qu'il y a à découvrir !</p>
					<hr style={{width:"60%"}}/>
				</div>
				<div className="container Main_map" >
					<div className="Main_map_svg" >						
						<Map
							onCountyClick={(county) => {
								history.push(`/map/region/${county.region.toLowerCase()}/prefecture/${county.title.toLowerCase()}`);
							}}
							currentZoneHover={currentZoneHover}
						/>
					</div>						
					<div className="Main_map_legende">
      					<ListGroup className="Main_list" variant='flush'>
						  <ListGroup.Item className="Main_list_title rounded-pill" disabled style={{backgroundColor: "rgb(201, 197, 185)"}}>Les régions du Japon</ListGroup.Item>
								{regions.map( (r) => (
									<ListGroup.Item
										className="Main_list_item rounded-pill " 
										key={r.id}
										onMouseOver={() => {
											let regionHover = counties.filter((c) => c.region === r.id)
											setCurrentZoneHover(regionHover);
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
			</div>
		</div>
	);
}

export default Main;
