import { React } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import MenuBar from './component/MenuBar';
import MaterialUI from './component/MaterialUI';
import FluentUI from './component/FluentUI';
import Header from './component/Header';
import { TabContext, TabPanel } from '@mui/lab';

const App = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<Header/>
				<TabPanel value="1">
					<MaterialUI { ...context }/>
				</TabPanel>
				<TabPanel value="2">
					<FluentUI { ...context }/>
				</TabPanel>
			</Box>
		</TabContext>
	</Box>;
};

export default App;
