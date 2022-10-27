import { Checkbox, 	initializeIcons } from '@fluentui/react';
import { React } from 'react';

initializeIcons();
const FICheckBox = (context) => {
	const { state: { selected }} = context;

	return (
		<Checkbox
			label="checkbox"
			defaultChecked={ selected }
			onChange={ () => context.actions.isSelected(true) }
		/>);
};

export default FICheckBox;
