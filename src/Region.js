import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import {Button} from 'react-bootstrap';
import {regions} from './dataLocal';
import NavBar from './Navbar';

export default function Region () {
    const {regionName} = useParams();
    const objRegion = regions.find((r) => r.id.toLowerCase() === regionName)
	const [currentRegion, setCurrentRegion] = useState(objRegion);
		return (
			<div >
                <NavBar />
                <div className="container" style={{backgroundColor:"white"}}>
                    <div className="container mb-3 text-center">
                        <h1 className="display-1 ">{currentRegion.id}</h1>
                        <img className="" src={currentRegion.imgRegion} alt={currentRegion.id}/>
                    </div>
                    <div className="container">
                        <CardDeck>
                        <div className="row ">
                            {currentRegion.prefectures.map( p => (
                                <div className="col-3 py-3">
                                <Card>
                                    <Card.Header className="text-center" as="h5">{p.pref}</Card.Header>
                                    <Card.Img variant="top" src={p.img} alt={p.pref} />
                                    <Card.Body >						
                                        <Card.Text className="justify-content">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button style={{width:"100%"}} variant="primary" href={`/map/region/${currentRegion.id.toLowerCase()}/prefecture/${p.pref.toLowerCase()}`}>Visiter {p.pref}</Button>
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