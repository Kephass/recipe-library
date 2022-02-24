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
});

export default theme;
