import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
	//const { name, email, id } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1">
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h1 className="name-text">{name}</h1>
				<p>{email}</p>
			</div>
		</div >
	);
}

export default Card;