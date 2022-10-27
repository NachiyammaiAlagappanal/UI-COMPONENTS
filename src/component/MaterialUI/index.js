import { Box, Button, Checkbox, InputLabel,
	MenuItem, Select, Slider, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { React } from 'react';

const MIButton = () =>
	<Button
		sx={ { width: 200 } }
		variant="contained"
		color="primary"
		size="small"
	>Primary</Button>;

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

const MICheckBox = () => <Checkbox defaultChecked={ true }/>;

const MISelect = (context) => {
	const { state: { fruit }} = context;

	return <Box>
		<InputLabel>Select Fruit</InputLabel>
		<Select
			value={ fruit }
			label="Fruit"
			onChange={ (evt) => context.actions.setFruit(evt.target.value) }
		>
			<MenuItem value="Apple">Apple</MenuItem>
			<MenuItem value="Orange">Orange</MenuItem>
			<MenuItem value="Mango">Mango</MenuItem>
		</Select>
	</Box>;
};

const MITextField = () => <TextField label="standard" variant="standard"/>;

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
