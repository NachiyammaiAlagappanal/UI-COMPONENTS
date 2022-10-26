import { React } from 'react';
import './App.scss';
import ComboSelect from './Component/ComboBox';
import Button from './Component/DefaultButton';

const App = (context) => {
	const { state: { count }} = context;

	return <div className="App" role="App">
		<div>Clicked: { count }</div>
		<Button { ...context }/>
		<ComboSelect/>
	</div>;
};

export default App;
