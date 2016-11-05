
import React from 'react';
import { InputNumber } from 'antd';


export default class transtools extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			myvalue:"",
			myvalue2:""

		};
		this.handelChange2=this.handelChange2.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}

		/*handleChange(event) {
			var val2 =event.target.value;
			this.setState({value:val2});
			this.refs.secondinput.value=val2*4;

		 }*/
		 handleChange(value) {
		 	this.setState({myvalue:value,myvalue2:value*8});
		 	

		 }


		handelChange2(event){
			/*var val=event.target.value;*/

			this.setState({myvalue2:event,myvalue:event*2});
			

		}
	render(){
     return (
     	<div className="toolone">
     	   <span>inch</span>
     	   <InputNumber size="large" ref='fistinput' className="testone" step={0.01}  value={this.state.myvalue} onChange={this.handleChange} />
     	   <InputNumber size="large" ref= 'secondinput' step={0.01} value={this.state.myvalue2} onChange={this.handelChange2}/>
     	   <span>cm</span>
     	   {/*<input ref='secondinput' type='text' onChange={this.handelChange2}/>*/}
      </div>
     )
	}
}
