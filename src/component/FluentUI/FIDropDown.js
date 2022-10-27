import { React } from 'react';
import { Dropdown } from '@fluentui/react';

const FIDropDown = (context) => {
	const { config: { options }} = context;

	return (
		<Dropdown
			placeholder="Select an option"
			label="DropDown"
			options={ options }
		/>);
};

export default FIDropDown;
