import cyan from '@material-ui/core/colors/cyan';
import lime from "@material-ui/core/es/colors/lime";
import { createMuiTheme } from "@material-ui/core";

const defaultTheme = {
	palette: {
		primary: {
			main: cyan[700],
			light: cyan[200],
			dark: cyan[900]
		},
		secondary: {
			main: lime[400],
			light: lime[200],
			dark: lime[700]
		}
	},
	typography: {
		useNextVariants: true
	}
};

export default createMuiTheme(defaultTheme);