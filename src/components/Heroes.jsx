import React, { Component, useState } from 'react';
import AddHero from './AddHero.jsx';
import HeroCard from './HeroCard';

function Heroes ({ heroList }) {
	return (
		<div className="flex container flex-row gap-4 items-center justify-center max-w-full min-h-screen -mt-20">
			{heroList.map(hero => {
				return (
					<HeroCard key={hero.id} {...hero} />
				)
			})}
			<AddHero />
		</div>
	);
};

export default Heroes;