import { Slider } from '@fluentui/react';
import { Box } from '@mui/material';
import { React } from 'react';

const FISlider = (context) => {
	const { state: { slider }} = context;

	return (
		<Box sx={ { width: 300 } }>
			<Slider
				label="Slider"
				min={ 0 }
				max={ 100 }
				value={ slider }
				showValue={ true }
				onChange={ (value) => context.actions.updateSlider(value) }
			/></Box>);
};

export default FISlider;
