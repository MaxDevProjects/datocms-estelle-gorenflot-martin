/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			transitionProperty: {
				'spacing': 'margin, padding',
			  },
			colors: {
				'blue': '#083757',
				'orange': '#FFBD59',
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1'
			},
			spacing: {
				28: '7rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			},
			typography: {
				lg: {
					css: {
						img: {
							marginTop: '0',
							marginBottom: '0'
						}
					}
				}
			},
			fontFamily: {
				text: 'DidactGothic',
				title: 'KaushanScript'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
