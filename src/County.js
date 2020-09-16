import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import {Button} from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {counties} from './dataLocal';
import NavBar from './Navbar';

export default function County () {
	const {regionName} = useParams();
	const {countyName} = useParams();	
	const objCounty = counties.find((c) => c.title.toLowerCase() === countyName);
	const [currentCounty, setCurrentCounty] = useState(objCounty);
		return (
			<div>
				<NavBar className="" />				
				<div className="container" style={{backgroundColor: "white"}} >			
					<div className="container mb-3 text-center">
						<h1 className="display-1 p-3">{currentCounty.title}</h1>
						<img src={currentCounty.imgCounty} alt={currentCounty.title} style={{width: "60%"}} />
					</div>
					<div className="container">
						<CardDeck>
							<div className="row ">
								{currentCounty.zones.map(c => (
									<div className="col-3 py-3">
										<Card>
											<Card.Header className="text-center" as="h5">{c.zone}</Card.Header>
											<Card.Img variant="top" src={c.img} alt={c.zone} />
											<Card.Body>						
												<Card.Text className="text-justify">
													Some quick example text to build on the card title and make up the bulk of
													the card's content.
												</Card.Text>
												<Button  style={{width:"100%"}} href={`/map/region/${regionName}/prefecture/${countyName}/${c.zone.toLowerCase()}`} variant="primary">Visiter {c.zone}</Button>
											</Card.Body>
										</Card>
									</div>
								))}
							</div>
						</CardDeck>
					</div>
				</div>
			</div>
		);
}
