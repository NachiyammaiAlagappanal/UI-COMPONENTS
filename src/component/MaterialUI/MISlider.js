import { Box, Slider } from '@mui/material';
import { Stack } from '@mui/system';
import { React } from 'react';

const SliderDisplay = (context) => {
	const { state: { slider }} = context;

	return (
		<Slider
			getAriaLabel={ () => 'Mark Range' }
			value={ slider }
			onChange={ (evt) => context.actions
				.updateSlider(evt.target.value) }
			color="primary"
			valueLabelDisplay="auto"
			min={ 0 }
			max={ 100 }
		/>);
};

const MISlider = (context) =>
	<Box sx={ { width: 200 } }>
		<Stack
			spacing={ 2 }
			direction="row"
			sx={ { mb: 1 } }
			alignItems="center"
		>
			<SliderDisplay { ...context }/></Stack></Box>;

export default MISlider;
