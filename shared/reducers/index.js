import location from "./location.reducer"
import info from "./info/info.reducer"

import { combineReducers } from 'redux-loop'

const reducers = combineReducers({
	info:info,
	location:location
});

export default reducers;
