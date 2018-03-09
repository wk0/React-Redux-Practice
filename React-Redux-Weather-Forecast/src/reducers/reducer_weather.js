import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){
    switch (action.type){
        case FETCH_WEATHER:
            // Return a new state, dont change state!
            
            // New ES6 synax [ city, city, city]. Not [city, [city]]
            return [ action.payload.data, ...state];
    };
    return state;
}
