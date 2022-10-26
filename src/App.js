import { React } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import MenuBar from './component/MenuBar';

import MaterialUI from './component/MaterialUI';
import FluentUI from './component/FluentUI';
import Header from './component/Header';
import TabPanel from './component/TabPanel';

const App = (context) => {
	const { state: { value }} = context;

	return <Box className="App" role="App">
		<Box sx={ { display: 'flex' } }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<Header/>
				<TabPanel value={ value } index={ 0 }>
					<MaterialUI { ...context }/>
				</TabPanel>
				<TabPanel value={ value } index={ 1 }>
					<FluentUI { ...context }/>
				</TabPanel>
			</Box>
		</Box>
	</Box>;
};

export default App;
