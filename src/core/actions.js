const intimate = (context) => ({ count: context.state.count + 1 });

const toggleMenu = (context) => ({
	value: context.data,
});
const updateSlider = (context) => ({
	slider: context.data,
});
const isSelected = (context) => ({
	selected: context.data,
});
const setFruit = (context) => ({
	fruit: context.data,
});

const actions = {
	intimate,
	updateSlider,
	toggleMenu,
	isSelected,
	setFruit,
};

export default actions;
