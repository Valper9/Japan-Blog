import React from 'react';
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomePage.css';

export default function Home() {
	return (
		<div className="Home">
			<div className="Jumbotron">
				<Jumbotron className="Home_jumbotron">
					<h1 className="display-4">Venez découvrir tout ce qui est possible de faire au Japon ! </h1>
					<hr />
					<p className="display-4">
						Voici tout ce que j'ai pu découvrir de ce qu'il faut voir au Japon alors ne perdez pas de temps
						et suivez moi !
					</p>
					<p>
						<Button href="/map" className="btn-lg" variant="primary">
							Par ici !
						</Button>
					</p>
				</Jumbotron>
			</div>
		</div>
	);
}
