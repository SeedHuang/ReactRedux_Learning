import {createStore, combineReducers} from 'redux';

const initalState = {
	memberList : [
		{
			name: 'Seed Huang',
			age: '34 years-old'
		}
	],
	selectedIndex: 0
};

/**
* actions 可以定义一些actions types，但是不是必须的
*/
const actions = {
	addMember: Symbol.for('ADD_MEMBER'),
	selectedMember: Symbol.for('SELECTED_MEMBER')
};

const {addMember, selectedMember} = actions;


const reducer = combineReducers({
	memberList: (state = [], action) => {
		console.log(action, '>>>>>1')
		switch (action.type) {
			case addMember:
				return [
					...state,
					{
						name: 'Sky Huang',
						age: '5 years-old'
					}
				];
			default:
				return state;
		}
	},
	selectedIndex: (state = -1, action) => {
		console.log(action, '>>>>>2')
		switch (action.type) {
			case selectedMember:
				return action.index;
			default:
				return state;
		}
	}
});


const store = createStore(reducer, initalState);
const unsubscrib = store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch({type: actions.addMember});
window.$$actions = actions;
window['$$store'] = store
