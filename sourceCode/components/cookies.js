import React from 'react'
import { Table,Button } from 'antd';
import { hashHistory  } from 'react-router'

export default class Cookies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1:' ',
      num2:' ',
      num3:' ',
      num4:' ',
      num5:' '
      
    };
  }
   // static defaultProps = {
   //      data: [],
   //  };
  onButtonClick(e){
    e.preventDefault

    this.setState({num1:this.props.data? this.props.data.length+'人': '0人'});
    this.setState({num2:this.props.data2? this.props.data2.length+'人': '0人'});
    this.setState({num3:this.props.data3? this.props.data3.length+'人': '0人'});
    this.setState({num4:this.props.data4? this.props.data4.length+'人': '0人'});
    this.setState({num5:this.props.data5? this.props.data5.length+'人': '0人'})
  }
  render() {
  //   function objectToArray (i) {
  //   return ({name:i});
  // }
  //   let ar = this.props.data;
  //   let datas = ar.map(objectToArray);

    
    // var datas=[];
    
    // console.log('props'+this.props.data)
    // var datas = this.props.data.map((i)=>{ return({name:i}) });
    // console.log(datas);
    const columns = [{  title: ' Name',dataIndex: 'name',key: 'name',
    render: text => <a >{text}</a>,}]

    // const data = [{name: 'John Brown'}, { name: 'Jim Green'}, {name: 'Joe Black'}];



  return (
    
    <div className='tables'>
    <Button type="primary"   onClick={this.onButtonClick.bind(this)}>统计</Button>
      <div className='table1'><Table  columns={columns}  dataSource={this.props.data}  bordered title={() => '蝇量级'} footer={() => this.state.num1} /></div>
      <div className='table2'><Table  columns={columns}  dataSource={this.props.data2}  bordered title={() => '羽量级'} footer={() => this.state.num2}/></div>
      <div className='table3'><Table  columns={columns}  dataSource={this.props.data3}  bordered title={() => '轻量级'} footer={() => this.state.num3}/></div>
      <div className='table4'><Table  columns={columns}  dataSource={this.props.data4}  bordered title={() => '中量级'} footer={() => this.state.num4}/></div>
      <div className='table5'><Table  columns={columns}  dataSource={this.props.data5}  bordered title={() => '重量级'} footer={() => this.state.num5}/></div>
    </div>
    
   )
}
}