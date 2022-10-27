import { Box } from '@mui/material';
import { React } from 'react';
import FIDropDown from './FIDropDown';
import FITextField from './FITextField';
import FICheckBox from './FICheckBox';
import FISlider from './FISlider';
import FIButton from './FIButton';

const FluentUI = (context) =>
	<Box sx={ { display: 'flex',
		alignItems: 'center', flexDirection: 'column', gap: 10 } }
	><FIButton/>
		<FISlider { ...context }/>
		<FICheckBox { ...context }/>
		<FIDropDown/>
		<FITextField/></Box>;

export default FluentUI;
