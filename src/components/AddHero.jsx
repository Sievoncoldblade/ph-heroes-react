import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function AddHero () {
	return (
		<Link to="/addHero" className="opacity-10 hover:opacity-20">
		
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</Link>
	);
}

export default AddHero