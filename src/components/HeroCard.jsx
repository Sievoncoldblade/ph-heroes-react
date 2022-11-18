import React, { useState, Component } from 'react'

function HeroCard ({ name, image, birthYear, deathYear, background }) {
	const [isHidden, setIsHidden] = useState(true);
	const [isDotHidden, setIsDotHidden] = useState(true);
	const handleClick = (e) => {
		setIsHidden(!isHidden);
		!isDotHidden ? setIsDotHidden(!isDotHidden) : null;
	}
	const handleDotClick = () => {
		console.log(isDotHidden);
		setIsDotHidden(!isDotHidden);
	}
	return (
		<div className="flex flex-row border border-neutral-700 overflow-hidden group text-neutral-300">
			<img onClick={handleClick} className="object-cover h-90 bg-gradient-to-t from-neutral-600 to-neutral-800 saturate-0 w-60" src={ image } alt={`${ name }'s photo`} />
			<div className={`flex flex-col ${isHidden ? 'bg-neutral-700' : ''}  text-center justify-center max-w-xs transition-colors`}>
				<h1 className={`text-2xl ${isHidden ? '-rotate-90' : ''} font-semibold ${isHidden ? 'hidden' : ''} group-hover:block transition-all`}>{ name }</h1>
				<p className={`text-xs ${isHidden ? 'hidden' : ''} `}>({ birthYear }-{ deathYear })</p>
				<p className={`text-xs ${isHidden ? 'hidden' : ''} px-4 py-3 text-justify`}>{ `${isDotHidden ? background.substring(0, 150) : background }` }{isDotHidden ? (background.length > 150 ? <span className='font-bold' onClick={handleDotClick}>... Read more</span> : '' ) : ''}</p>
			</div>
		</div>
	);
};

export default HeroCard;