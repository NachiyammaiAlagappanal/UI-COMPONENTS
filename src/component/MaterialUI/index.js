import { Box } from '@mui/material';
import { React } from 'react';
import MIButton from './MIButton';
import MISlider from './MISlider';
import MITextField from './MITextField';
import MISelect from './MISelect';
import MICheckBox from './MICheckBox';

const MaterialUI = (context) =>
	<Box sx={ { display: 'flex',
		alignItems: 'center', flexDirection: 'column', gap: 10 } }
	>
		<MIButton/>
		<MISlider { ...context }/>
		<MICheckBox/>
		<MISelect { ...context }/>
		<MITextField/>
	</Box>;

export default MaterialUI;
