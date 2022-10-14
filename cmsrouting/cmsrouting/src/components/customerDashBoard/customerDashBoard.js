import React, {Component} from 'react';
import './customerDashBoard.scss'
import Menu from '../menu/menu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class customerDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customer : {}
        };
    }
    componentDidMount() {
      let user = localStorage.getItem("cuser")
      axios.get("http://localhost:8585/searchByUser/"+user)
      .then(response => {
        this.setState({
          customer : response.data
        })
        console.log(response.data)
        localStorage.setItem("cid",response.data.cusId);
      })
    }
    render() {
      const {customer} = this.state
      return <div className="component-customer-dash-board">
        <Menu></Menu> <br></br> <br></br> <br></br><br></br><br></br>
        <div class = "style-customer">
        <table border="3" align="center"style={{padding:'5px'}}>
      <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Id </th><td>{customer.cusId}</td></tr> 
     <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Name</th><td>{customer.cusName}</td></tr>
    <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Phone</th><td>{customer.cusPhnNo}</td></tr>
    <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Username</th><td>{customer.cusUsername}</td></tr>
    <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Password</th><td>{customer.cusPassword}</td></tr>
    <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th>Customer Email</th><td>{customer.cusEmail}</td></tr>
    </table>
    
    </div>
    </div>
    } 
}
// export default connect(
//     ({ customerDashBoard }) => ({ ...customerDashBoard }),
//     dispatch => bindActionCreators({ ...customerDashBoardActions }, dispatch)
//   )( customerDashBoard );