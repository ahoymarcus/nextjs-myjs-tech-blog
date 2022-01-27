import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaFreeCodeCamp } from 'react-icons';


export const links = [
	{
		id: 1,
		url: '/',
		'text': 'home'
	},
	{
		id: 2,
		url: '/news',
		'text': 'news'
	},
	{
		id: 3,
		url: '/javascript',
		'text': 'javascript'
	},
	{
		id: 4,
		url: '/react-js',
		'text': 'react-js'
	},
	{
		id: 5,
		url: '/node-js',
		'text': 'node-js'
	},
	{
		id: 6,
		url: '/databases',
		'text': 'databases'
	},
	{
		id: 7,
		url: '/archives',
		'text': 'archives'
	},
];


export const social = [
	{
		id: 1,
		url: 'https://www.facebook.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.linkedin.com',
		icon: <FaLinkedin />
	},
	{
		id: 4,
		url: 'https://www.behance.net/',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.freecodecamp.org/',
		icon: <FaFreeCodeCamp />,
	},
];

