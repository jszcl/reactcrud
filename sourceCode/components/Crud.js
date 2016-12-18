import React , {Component}from 'react'
import { DatePicker, message } from 'antd';
import { Form, Icon, Input, Button, Checkbox ,Radio} from 'antd';
import Tables from './Table'
import {addUser,staticUser} from '../actions/actions.js'
import {connect} from 'react-redux'
import Tablecover from '../containers/tablecontainer.js'
import boxing from '../boxing.png'
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Crud extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleSubmit=this.handleSubmit.bind(this)
  }
 
  handleSubmit(e) {
    e.preventDefault();
    
    let oje = this.props.form.getFieldsValue();
    
    
     
    if (oje.name && oje.age && oje.weight) {
        this.props.dispatch(addUser(oje));
        this.props.dispatch(staticUser());
     } else{
      message.warning('必填项不得为空');
     }
   
  }

  render() {
  
  const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
  
  const { getFieldProps , setFieldsValue } = this.props.form;
  
  const { getFieldDecorator } = this.props.form;

    return (
      <div>
      <img className='boxingpic' src={boxing}/>
     <div className='forms'>
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
       <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your Age!' }],
          })(
            <Input addonBefore={<Icon type="meh-o" />} type="number" min={10} max={90} placeholder="Age" />
          )}

        </FormItem>
         <FormItem>
          {getFieldDecorator('weight', {
            rules: [{ required: true, message: 'Please input your weight!' }],
          })(
            <Input addonBefore={<Icon type="down-square-o" />}  addonAfter={'lb'} type="number" min={80} max={260} placeholder="weight of lb" />
          )}
               
        </FormItem>
      <FormItem
          {...formItemLayout}
          label="gender"
        >
          {getFieldDecorator('gender')(
            <RadioGroup>
              <RadioButton value="male">male</RadioButton>
              <RadioButton value="female">female</RadioButton>
             
            </RadioGroup>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox> Leave life and death out of consideration.(No fear. No distractions. )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Checkbox>
          )}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            submit
          </Button>
          
        </FormItem>
      </Form>
      <Tablecover/>
      </div>
      
      </div>
    );
  }
}

Crud= Form.create()(Crud);
Crud = connect()(Crud);
export default Crud;