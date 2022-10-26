const intimate = (context) => ({ count: context.state.count + 1 });

const toggleMenu = (context) => ({
	value: context.data,
});

const actions = {
	intimate,
	toggleMenu,
};

export default actions;
