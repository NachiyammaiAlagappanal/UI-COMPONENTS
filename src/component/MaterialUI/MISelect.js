import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { React } from 'react';

const MISelect = (context) => {
	const { state: { fruit }, config: { options }} = context;

	return <Box>
		<InputLabel>Select Fruit</InputLabel>
		<Select
			value={ fruit }
			label="Fruit"
			onChange={ (evt) => context.actions.setFruit(evt.target.value) }
		>
			{ options.map((option) =>
				<MenuItem
					key={ option }
					value={ option.text }
				>{option.text}</MenuItem>)}
		</Select>
	</Box>;
};

export default MISelect;
