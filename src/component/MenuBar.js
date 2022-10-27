import { React } from 'react';
import Tab from '@mui/material/Tab';
import { Toolbar } from '@mui/material';
import { TabList } from '@mui/lab';

const MenuBar = (context) =>
	<Toolbar className="toolbar">
		<TabList
			orientation="vertical"
			onChange={ (event, tabIndex) => {
				// eslint-disable-next-line no-console
				console.log(tabIndex);
				return context.actions
					.toggleMenu(tabIndex);
			} }
			textColor="inherit"
		>
			<Tab value="1" label="MATERIAL UI"/>
			<Tab value="2" label="FLUENT UI"/>
		</TabList>
	</Toolbar>
	;

export default MenuBar;
