import React, {Component} from 'react';
import './vendorDashboard.scss'
import VendorMenu from '../vendorMenu/vendorMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class vendorDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          vendors : {}
        };
    }
    componentDidMount() {
      let venuser = localStorage.getItem("vuser")
      axios.get("http://localhost:8585/searchByVendor/"+venuser)
      .then(response => {
        this.setState({
          vendors : response.data
        })
        console.log(response.data)
        localStorage.setItem("vid",response.data.venId);
   //     alert(localStorage.getItem("vid"))
      })
    }
    render() {
      const {vendors} = this.state
      return <div className="component-vendor-dash-board">
        <VendorMenu></VendorMenu>
        <br/>
        <br/>
        <div class = "style-vendor">
        <table border="3" align="center">
  <tr>
    <th style={{padding:'5px'}}>Vendor Id</th><td>{vendors.venId}</td></tr> 
  <tr>
    <th style={{padding:'5px'}}>Vendor Name</th><td>{vendors.venName}</td></tr>
    <tr>
    <th style={{padding:'5px'}}>Vendor Phone</th><td>{vendors.venPhnNo}</td></tr>
    <tr>
    <th style={{padding:'5px'}}>Vendor Username</th><td>{vendors.venUsername}</td></tr>
    <tr>
    <th style={{padding:'5px'}}>Vendor Password</th><td>{vendors.venPassword}</td></tr>
    <tr>
    <th style={{padding:'5px'}}>Vendor Email</th><td>{vendors.venEmail}</td></tr>
    </table>
    </div>
        </div>
    }
  }
// export default connect(
//     ({ vendorDashBoard }) => ({ ...vendorDashBoard }),
//     dispatch => bindActionCreators({ ...vendorDashBoardActions }, dispatch)
//   )( vendorDashBoard );