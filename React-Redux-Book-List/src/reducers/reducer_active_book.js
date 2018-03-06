// State argument is not application state
// this is not responsible for
export default function(state = null, action){
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}