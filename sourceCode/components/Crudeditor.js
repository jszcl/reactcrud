import React , {Component}from 'react'
import { DatePicker, message } from 'antd';
import { Form, Icon, Input, Button, Checkbox ,Radio} from 'antd';
import { hashHistory  } from 'react-router'
import {addUser,editUserSub,staticUser} from '../actions/actions.js'
import {connect} from 'react-redux'

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Crudedior extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleSubmit=this.handleSubmit.bind(this)

  }
  componentDidMount(){
    
   if(this.props.dataForm){
     const d = Object.assign({},this.props.dataForm)
     this.props.form.setFieldsValue(d)
   }
  }
 
  
  handleSubmit(e) {
    e.preventDefault();
   

    let ojee = this.props.form.getFieldsValue();
    ojee.key=this.props.dataForm.key;
     
    if (ojee.name && ojee.age) {
        clearTimeout(timer);
        this.props.dispatch(editUserSub(ojee));
        this.props.dispatch(staticUser());
        message.success('operation succeed');
        let timer=setTimeout( hashHistory.push('/crud'),3000);
        // console.log(ojee)
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
            <Input addonBefore={<Icon type="meh-o" />} type="number" placeholder="Age" />
          )}

        </FormItem>
        <FormItem>
          {getFieldDecorator('weight', {
            rules: [{ required: true, message: 'Please input your weight!' }],
          })(
            <Input addonBefore={<Icon type="down-square-o" />} type="number" placeholder="weight of lb" />
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
            <Checkbox>Leave life and death out of consideration.(No fear. No distractions. )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Checkbox>
          )}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            submit
          </Button>
          
        </FormItem>
      </Form>
    
      </div>
    );
  }
}
//     return (
// <div>
//      <NormalLoginForm />
//      <Tables/>
// </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  return {
    dataForm: state.todos.dataForm
  }

}
Crudedior= Form.create()(Crudedior);
Crudedior = connect(mapStateToProps)(Crudedior);
export default Crudedior;