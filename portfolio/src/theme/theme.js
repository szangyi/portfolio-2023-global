import { createTheme, responsiveFontSizes } from '@mui/material';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px


let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#e492c9',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        info: {
            main: '#a4b0ff',
            contrastText: '#fff'
        },

        customColors: {
            purple: {
                main: '#75448c',
            },
            rose: {
                main: '#e492c9',
            },
            orange: {
                main: '#f1b582',
            },
            grey: {
                light: '#E8E4E1',
                main: '#B8AFA9',
            }
        },

        // To fix Chip component color attribute


    },


    typography: {
        fontFamily: 'Hanken Grotesk',
        h1: {
            fontFamily: 'Industry',
            fontWeight: 800,
        },
        h2: {
            fontFamily: 'Industry',
            fontWeight: 800,
        },
        h3: {
            fontFamily: 'Industry',
            fontWeight: 800,
            fontSize: '2.5rem',
        },
        h4: {
            fontFamily: 'Industry',
            fontWeight: 800,
            fontSize: '1.7rem',
        },
        h5: {
            fontWeight: 800,
            fontFamily: 'Industry',
            fontSize: '1.4rem',
        },
        h6: {
            fontWeight: 800,
            fontFamily: 'Industry',
            fontSize: '1rem',
        },
        subtitle1: {
            fontSize: '.8rem',
            fontWeight: 500,
            textTransform: 'uppercase',
        },
        button: {
            fontWeight: 600,
        },
        overline: {
            fontSize: '0.6rem',
        },
    },
    shape: {
        borderRadius: 0,
    },
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
        MuiTooltip: {
            arrow: true,
        },
    },

    spacing: 10,
});


// theme.typography.h1 = {
//     fontFamily: 'Maven Pro',
// }

theme = responsiveFontSizes(theme);


export default theme;