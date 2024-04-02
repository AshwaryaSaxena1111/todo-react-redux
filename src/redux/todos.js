//redux/todos.js

//Action types
const ADD_TODO ='ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//Action creators
export const addToDo = (text) =>({
    type: ADD_TODO,
    payload: text,
});

export const deleteToDo = (index) =>({
    type: DELETE_TODO,
    payload: index,
});

//Reducer
const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload],
            };
        case DELETE_TODO:
            return{
                ...state,
                todos:state.todos.filter((_, index) => index !== action.payload),
            };
            default:
                return state;    
    }
};
export default todosReducer;