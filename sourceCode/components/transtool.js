
import React from 'react';
import { InputNumber,Button,Rate } from 'antd';


export default class Transtools extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			myvalue:"",
			myvalue2:"",
			lbvalue:"" ,
			kgvalue:"",
			bmi:"",
			ratevalue:0

		};
		this.handelChange2=this.handelChange2.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleChangelb=this.handleChangelb.bind(this);
		this.handelChangekg=this.handelChangekg.bind(this);
		this.handleBmi = this.handleBmi.bind(this);
	}

		

		handleBmi(){
			let bmish = this.refs.heightinput.value*1;
			let bmisw = this.refs.weightinput.value*1;
			let bmis= bmisw/bmish/bmish*10000;
			let bmisa= 'BMI='+(bmis.toFixed(2));
			this.setState({bmi:bmisa});
           if (bmis>19 && bmis <23){
           	this.setState({ratevalue:5*1})
           }else if (bmis>17 && bmis<25){
           	this.setState({ratevalue:4*1})
           }else if (bmis>=16 && bmis<27){
           	this.setState({ratevalue:3*1})
           }else {
           	this.setState({ratevalue:2*1})
           }
			
		}
		 handleChange(value) {
		 	this.setState({myvalue:value,myvalue2:value*2.54});
		 	

		 }


		handelChange2(event){
			/*var val=event.target.value;*/

			this.setState({myvalue2:event,myvalue:event/2.54});
			

		}

		handleChangelb(value) {
			this.setState({lbvalue:value,kgvalue:value*0.453});
		}

		handelChangekg(value) {
			this.setState({kgvalue:value,lbvalue:value/0.453});
		}
	render(){
     return (
     	<div>
     		<div className="toolone">
     	   <h1>单位换算</h1> 
     	   <InputNumber size="large" ref='fistinput' className="testone" step={0.01}  value={this.state.myvalue} onChange={this.handleChange} /><span>inch</span>=
     	   <InputNumber size="large" ref= 'secondinput' step={0.01} value={this.state.myvalue2} onChange={this.handelChange2}/>
     	   <span>cm</span><br/><br/>
     	   {/*<input ref='secondinput' type='text' onChange={this.handelChange2}/>*/}
     	   
     	   <InputNumber size="large" ref='fistinput' className="testone" step={0.01}  value={this.state.lbvalue} onChange={this.handleChangelb} /><span>lb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>=
     	   <InputNumber size="large" ref= 'secondinput' step={0.01} value={this.state.kgvalue} onChange={this.handelChangekg}/>
     	   <span>kg</span>

      		</div>

      		<div className="tooltwo">
      		<h1>BMI测算</h1>
      		身高<input type= 'number' ref= 'heightinput'  />cm
      		体重<input type= 'number' ref= 'weightinput'   />kg
      		<Button onClick= {this.handleBmi}>体测</Button>
      		<span>
        		
        		<span>{this.state.bmi} </span>
        		<Rate   disabled  defaultValue={0} value={this.state.ratevalue}/>
      		</span>
      		</div>
      	</div>


     )
	}
}
