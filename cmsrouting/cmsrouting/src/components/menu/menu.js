import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import './menu.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="container">

       <div id ="navbar"> 

      <Link to="/customerDashboard" style={{textDecoration:'none'}}className="tabs">About User</Link>
    
      <Link to="/customerShow" style={{textDecoration:'none'}} className= "tabs">Customer Show</Link>
      
      <Link style={{textDecoration:'none'}} className="tabs" to="/customerWallet">Customer Wallet</Link>
    
      <Link style={{textDecoration:'none'}} className= "tabs" to="/customerOrders">Customer Orders</Link>
   
      <Link to="/customerPendingOrders" style={{textDecoration:'none'}} className="tabs">Customer Pending Orders</Link>
      
      <Link to="/showMenu" style={{textDecoration:'none'}}className="tabs" >Show Menu</Link>
      
      <Link  style={{textDecoration:'none'}} className= "tabs" to="/placeOrder">Place Order</Link>

      <Link to="/"className='tabs' id='logouttab' >Logout</Link>
        </div>
      </div>
  }
}

// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );

