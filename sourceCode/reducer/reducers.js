import React , {combineReducers} from 'redux'
import todos from './todos'
import editUsers from './edit'


const lists = combineReducers({
	todos
	// editUsers
})

export default lists