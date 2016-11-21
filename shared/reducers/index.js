import location from "./location.reducer"
import { combineReducers } from 'redux-loop'

const reducers = combineReducers({
	location:location
});

export default reducers;
