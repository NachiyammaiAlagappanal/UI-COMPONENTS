
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { React } from 'react';

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

export default MISelect;
