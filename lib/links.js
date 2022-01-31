import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



export const links = [
	{
		id: 1,
		staticUrl: '/',
		dynamicUrl: '',
		text: 'home'
	},
	{
		id: 2,
		staticUrl: '/news-articles',
		dynamicUrl: '/news',
		text: 'news'
	},
	{
		id: 3,
		staticUrl: '/vanillajs-articles',
		dynamicUrl: '/vanillajs',
		text: 'vanilla-js'
	},
	{
		id: 4,
		staticUrl: '/reactjs-articles',
		dynamicUrl: '/reactjs',
		text: 'react-js'
	},
	{
		id: 5,
		staticUrl: '/nodejs-articles',
		dynamicUrl: '/nodejs',
		text: 'node-js'
	},
	{
		id: 6,
		staticUrl: '/databases-articles',
		dynamicUrl: '/databases',
		text: 'databases'
	},
	{
		id: 7,
		staticUrl: '/archives-articles',
		dynamicUrl: '/archives',
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



