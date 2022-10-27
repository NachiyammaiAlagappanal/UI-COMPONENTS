import { React } from 'react';
import { Dropdown } from '@fluentui/react';

const options = [
	{ text: 'Apple' },
	{ text: 'orange' },
	{ text: 'Mango' },
];

const FIDropDown = () =>
	<Dropdown
		placeholder="Select an option"
		label="DropDown"
		options={ options }
	/>;

export default FIDropDown;
