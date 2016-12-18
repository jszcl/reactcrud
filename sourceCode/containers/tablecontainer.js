import { connect } from 'react-redux'
import Tables from '../components/Table.js'
import {delUser,editUser,staticUser} from '../actions/actions.js'

const mapStateToProps = (state) => {
	return {
		data: state.todos
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		onDelClick:(id) =>{
			dispatch(delUser(id));
			dispatch(staticUser())
			
		},
		onEditClick:(obj) => {
			dispatch(editUser(obj));
			
		}
}
}

const Tablecover = connect(	mapStateToProps,mapDispatchToProps)(Tables)

export default Tablecover