import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				color: 'white',
				lineHeight: 'tall',
			},
			a: {
				color: 'yellow.500',
			},
		},
	},
	fonts: {
		heading: 'Barlow, sans-serif',
		body: 'Barlow, sans-serif',
	},
	colors: {
		testYellow: '#ffc20d', // Active tabs, clock / star / flame icons, recommended meal font
		primary: '#212121', // Background
		secondary: '#272727', // Recipe cards, Ingredient Cards
		navInactive: '#828282',
		navActive: 'yellow.500',
	},
});

export default theme;
