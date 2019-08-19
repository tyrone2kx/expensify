import { createStore } from 'redux';


// these are called action generators. They generate the actions instead of passing objects directly into the dispatch funtion.

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy // short hand syntax will be only incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy // short hand syntax will be only decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count: count // shorthand will be just count
})



// REDUCERS => (they define what changes that will be carried out by the action)
// 1. they must be pure functions
// 2. they shouldn't change the state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        
        case 'RESET':
            return {
                count: 0
            };
        
        case 'SET':
            return {
                count: action.count
            }
        
        default:
            return state;
    }
}


const store = createStore(countReducer);



const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());


store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch({type: 'RESET'});


store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));