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
				<NavBar />
				<div className="container">
					<h1 className="display-1">{currentCounty.title}</h1>
					<img src={currentCounty.img} alt={currentCounty.title} style={{width: "50%"}} />
				</div>
				<div className="container">
                    <CardDeck>
                        <div className="row ">
							{currentCounty.zones.map(c => (
                                <div className="col-3">
									<Card>
										<Card.Title>{c.zone}</Card.Title>
										<Card.Img variant="top" src={c.img} alt={c.zone} />
										<Card.Body>						
											<Card.Text>
												Some quick example text to build on the card title and make up the bulk of
												the card's content.
											</Card.Text>
											<Button href={`/map/region/${regionName}/prefecture/${countyName}/${c.zone.toLowerCase()}`} variant="primary">Visiter {c.zone}</Button>
										</Card.Body>
									</Card>
                                </div>
                             ))}
                        </div>
                    </CardDeck>
				</div>
			</div>
		);
}
