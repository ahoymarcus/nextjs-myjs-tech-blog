import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



export const links = [
	{
		id: 1,
		url: '/',
		text: 'home'
	},
	{
		id: 2,
		url: '/news-articles',
		text: 'news'
	},
	{
		id: 3,
		url: '/vanillajs-articles',
		text: 'vanilla-js'
	},
	{
		id: 4,
		url: '/reactjs-articles',
		text: 'react-js'
	},
	{
		id: 5,
		url: '/nodejs-articles',
		text: 'node-js'
	},
	{
		id: 6,
		url: '/databases-articles',
		text: 'databases'
	},
	{
		id: 7,
		url: '/archives-articles',
		text: 'archives'
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
    url: 'https://br.linkedin.com/',
		icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net/',
    icon: <FaBehance />,
  },
];



