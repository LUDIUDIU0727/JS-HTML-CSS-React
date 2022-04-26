import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


//you should never change the existing state,you should return a brand new state
//in redux toolkit you can use state.count++(still not manipulating the existing data)



// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);


//----------------------------------------------------------------------------------
//counterSlice.actions.toggleCounter() returns an action object of this shape:
//{ type:'some auto-generated unique identifier'}

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});


export default store;