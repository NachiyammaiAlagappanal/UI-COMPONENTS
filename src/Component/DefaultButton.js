import { DefaultButton } from '@fluentui/react';
import { React } from 'react';

const Button = (context) =>
	<DefaultButton
		text="clickMe!"
		onClick={ () =>	context.actions.intimate(context) }
	/>;

export default Button;
