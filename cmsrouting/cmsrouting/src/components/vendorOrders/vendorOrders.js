import React, {Component} from 'react';
import axios from 'axios';
import VendorMenu from '../vendorMenu/vendorMenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerOrdersActions from "../../store/customerOrders/actions";
export default class vendorOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders : []
    };
}

componentDidMount() {
  let vid = localStorage.getItem("vid")
   // alert(vid)
  axios.get("http://localhost:8585/vendorOrders/"+vid)
  .then(response => {
    this.setState({
      orders : response.data
    })
    console.log(response.data)
  })
}

render() {
  const {orders} = this.state
  return <div className="component-vendor-orders">
    <VendorMenu></VendorMenu>
    <br></br>
    <table border="3" align='center'>
  <tr>
    <th>Order Id</th>
    <th>Customer Id</th>
    <th>Menu Id</th>
    <th>Vendor Id</th>
    <th>Wallet Source</th>
    <th>Order Quantity</th>
    <th>Bill Amount</th>
    <th>Order Status</th>
    <th>Order Comments</th>
  </tr>
  {
    orders.map( order => 
      <tr>
        <td>{order.ordId}</td>
        <td>{order.cusId}</td>
        <td>{order.menId}</td>
        <td>{order.venId}</td>
        <td>{order.walSource}</td>
        <td>{order.ordQuantity}</td>
        <td>{order.ordBillamount}</td>
        <td>{order.ordStatus}</td>
        <td>{order.ordComments}</td>
        
      </tr>
  )
  }
</table>

  </div>;
}
  }
// export default connect(
//     ({ vendorOrders }) => ({ ...vendorOrders }),
//     dispatch => bindActionCreators({ ...vendorOrdersActions }, dispatch)
//   )( vendorOrders );