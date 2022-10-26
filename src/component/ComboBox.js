import { React } from 'react';
import { ComboBox, SelectableOptionMenuItemType } from '@fluentui/react';

const options = [
	{
		key: 'Header1',
		text: 'First heading',
		itemType: SelectableOptionMenuItemType.Header,
	},
	{ text: 'Option A' },
	{ key: 'B', text: 'Option B' },
	{ key: 'C', text: 'Option C' },
	{ key: 'D', text: 'Option D' },
	{ key: 'divider', text: '-',
		itemType: SelectableOptionMenuItemType.Divider },
	{
		key: 'Header2',
		text: 'Second heading',
		itemType: SelectableOptionMenuItemType.Header,
	},
	{ key: 'E', text: 'Option E' },
	{ key: 'F', text: 'Option F', disabled: true },
	{ key: 'G', text: 'Option G' },
	{ key: 'H', text: 'Option H' },
	{ key: 'I', text: 'Option I' },
	{ key: 'J', text: 'Option J' },
];

const comboBoxStyles = { root: { maxWidth: 300 }};

const ComboSelect = () =>
	<ComboBox
		defaultSelectedKey="1"
		label="Basic multi-select ComboBox"
		multiSelect={ true }
		options={ options }
		styles={ comboBoxStyles }
	/>;

export default ComboSelect;
