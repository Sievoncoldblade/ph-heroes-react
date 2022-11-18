import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ({ setHeroList, heroList }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [birthYear, setBirthYear] = useState('');
	const [deathYear, setDeathYear] = useState('');
	const [background, setBackground] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setHeroList([...heroList, { name, image, birthYear, deathYear, background }])
		navigate('/heroes');
	}

	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleImageChange = (e) => {
		setImage(e.target.value)
	}
	const handleBirthYearChange = (e) => {
		setBirthYear(e.target.value)
	}
	const handleDeathYearChange = (e) => {
		setDeathYear(e.target.value)
	}
	const handleBackgroundChange = (e) => {
		setBackground(e.target.value)
	}
	return(
		<>
			<h1 className='text-4xl font-bold text-amber-400 text-center my-10'>Hero Form</h1>
			<div className="flex justify-center container gap-2 items-center max-w-full">
				<form onSubmit={handleSubmit} className="flex flex-col w-72">
					<label>Name of the Hero</label>
					<input onChange={handleNameChange} className="bg-transparent text-white border border-white px-4 py-2 focus:outline-none" type="text" name="name" id="name"></input>
					<label>Image URL</label>
					<input onChange={handleImageChange} className="bg-transparent text-white border border-white px-4 py-2 focus:outline-none" type="text" name="image" id="image"></input>
					<label>Birth Year</label>
					<input onChange={handleBirthYearChange} className="bg-transparent text-white border border-white px-4 py-2 focus:outline-none" type="number" name="birthYear" id="birthYear" min="1800" max="2022" step="1" defaultValue="1900"></input>
					<label>Death Year</label>
					<input onChange={handleDeathYearChange} className="bg-transparent text-white border border-white px-4 py-2 focus:outline-none" type="number" name="deathYear" id="deathYear" min="1800" max="2022" step="1" defaultValue="1900"></input>
					<label>Background</label>
					<textarea onChange={handleBackgroundChange} className="bg-transparent text-white border border-white px-4 py-2 focus:outline-none" name="background" id="background"></textarea>
					<input className='font-semibold mt-5 border border-amber-400 py-2 px-3 text-amber-400 hover:bg-amber-400 hover:text-neutral-800 transition-all' type="submit" value="Add Hero"></input>
				</form>
			</div>
		</>
	)
};