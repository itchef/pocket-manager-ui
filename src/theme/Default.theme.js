import cyan from '@material-ui/core/colors/cyan';
import lime from "@material-ui/core/es/colors/lime";
import { createMuiTheme } from "@material-ui/core";

const defaultTheme = {
	palette: {
		primary: {
			main: cyan[700]
		},
		secondary: {
			main: lime[400]
		}
	}
};

export default createMuiTheme(defaultTheme);