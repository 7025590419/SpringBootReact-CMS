import React, {Component} from 'react';
import './vendorMenu.scss'
import VendorDashBoard from '../vendorDashBoard/vendorDashBoard';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-vendormenu">
        <div id ="navbar">
      <Link to ="/vendorDashBoard" style={{textDecoration:'none'}}className="tabs">Vendor DashBoard</Link>
     
      <Link to ="/vendorShow"style={{textDecoration:'none'}}className="tabs">Vendor Show</Link>
     
      <Link to ="/vendorOrders"style={{textDecoration:'none'}}className="tabs">Vendor Orders</Link>
      
      <Link to ="/vendorPendingOrder"style={{textDecoration:'none'}}className="tabs">Vendor Pending Order</Link>
      
      <Link to ="/acceptOrderReject"style={{textDecoration:'none'}}className="tabs"> Vendor Acccept Reject Order</Link>
      
      <Link to="/"style={{textDecoration:'none'}} className='tabs' id='logouttab'>Logout</Link>  
        </div>
      </div>
    }
  }
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );