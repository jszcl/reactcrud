import { USER_EDIT } from '../actions/actions'

const editUsers = (state = [] , action)=>{
	switch(action.type){
		case 'USER_EDIT':
			return Object.assign({},action.obj)
		default:
			return state
	}
}

export default editUsers