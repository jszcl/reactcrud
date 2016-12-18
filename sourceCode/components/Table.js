import React  from 'react'
import { Table , Icon } from 'antd'
import { hashHistory  } from 'react-router'

export default  class Tables extends  React.Component {
constructor(props){
		super(props);
		
		this.state={
		}
	}
handelDel(record,event) {
  event.preventDefault();
  this.props.onDelClick(record.key);
  
}

handeledit(record,event) {
  event.preventDefault();
  console.log(record);
  this.props.onEditClick(record);
  hashHistory.push('/edit');
}
	render(){
		const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
}, {
  title: 'Weight',
  dataIndex: 'weight',
  key: 'weight',
},{
      title:'AgreeOrNot',
      dataIndex:'agreement',
      key:'agreement',
      render:(text)=>(
        <span>{text ? 'YES' : 'NO'}</span>
      )
    },
     {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a  href="#" onClick = {this.handelDel.bind(this,record)} >delete</a>
      <span className="ant-divider" />
      <a  href="#" onClick = {this.handeledit.bind(this,record)}>edit</a>
      <span className="ant-divider" />
      
    </span>
  ),
}];

// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
// }];
return <Table columns={columns} dataSource={this.props.data} />
}
}