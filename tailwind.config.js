/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            'light',
            'dark',
            'retro',
            'cyberpunk',
            'lofi',
            'wireframe',
            'business',
            'night',
            'dim',
            'nord',
            'sunset',
        ],
        darkTheme: 'dark',
        base: true,
        styled: true,
        utils: true,
        themeRoot: ':root',
    },
};
