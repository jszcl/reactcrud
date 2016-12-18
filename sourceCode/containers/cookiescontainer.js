import { connect } from 'react-redux'
import Cookies from '../components/cookies.js'
import {staticUser} from '../actions/actions.js'

const mapStateToProps = (state) => {
	return {
		data: state.todos.statics1,
		data2:state.todos.statics2,
		data3:state.todos.statics3,
		data4:state.todos.statics4,
		data5:state.todos.statics5,
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick:(id) =>{
			dispatch(staticUser(id))
		}
		
}
}

const Cookiecover = connect(mapStateToProps,mapDispatchToProps)(Cookies)

export default Cookiecover