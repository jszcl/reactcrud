import React from 'react'
import { DatePicker, message } from 'antd';
import Crudeditor from './Crudeditor'


export default class About extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  
  render() {
    
    return (
      <div >
        
        <Crudeditor />
      </div>
    );
  }
}
