import React, {Component} from 'react';
import './customerShow.scss'
import Menu from '../menu/menu';
import  axios  from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerShowActions from "../../store/customerShow/actions";
export default class customerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers : []
    };
}
componentDidMount() {
  axios.get("http://localhost:8585/showCustomer")
  .then(response => {
    this.setState({
      customers : response.data 
    })
    console.log(response.data)
  })

}
render() {
  const {customers} = this.state
  
  return <div className="component-customer-service">
    <Menu></Menu> <br/> <br></br> <br></br> <br></br><br></br><br></br>
    <table border="3" align='center' style={{padding:'5px'}}>
      <tr style={{fontFamily:'monospace,Lucida Console'}}>
        <th style={{padding:'5px'}}>Customer Id</th>
        <th style={{padding:'5px'}}>Customer Name</th>
        <th style={{padding:'5px'}}>Phone No</th>
        <th style={{padding:'5px'}}>UserName</th>
        <th style={{padding:'5px'}}>Password</th>
        <th style={{padding:'5px'}}>Email</th>
      </tr>
      {
        customers.map( customer => 
          <tr style={{fontFamily:'monospace,Lucida Console'}}>
            <td style={{padding:'5px'}}>{customer.cusId}</td>
            <td style={{padding:'5px'}}>{customer.cusName}</td>
            <td style={{padding:'5px'}}>{customer.cusPhnNo}</td>
            <td style={{padding:'5px'}}>{customer.cusUsername}</td>
            <td style={{padding:'5px'}}>{customer.cusPassword}</td>
            <td style={{padding:'5px'}}>{customer.cusEmail}</td>
          </tr>
      )
      }
    </table>

    </div>;
}

  }
// export default connect(
//     ({ customerShow }) => ({ ...customerShow }),
//     dispatch => bindActionCreators({ ...customerShowActions }, dispatch)
//   )( customerShow );