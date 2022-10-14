import React, {Component} from 'react';
import './customerPendingOrders.scss'
import axios from 'axios';
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerPendingOrdersActions from "../../store/customerPendingOrders/actions";
export default class customerPendingOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("cid")
 // alert(cid)
  axios.get("http://localhost:8585/customerPendingOrders/"+cid)
  .then(response => {
    this.setState({
      orders : response.data
    })
    console.log(response.data)
   // localStorage.setItem("cid",response.data.cusId);
//     alert(localStorage.getItem("cid"))
  })
}

render() {
  const {orders} = this.state
  return <div className="component-customer-wallet">
    <Menu></Menu> <br/>  <br></br> <br></br> <br></br><br></br><br></br>
    <table border="3" align='center'>
      <thead>
  <tr style={{fontFamily:'monospace,Lucida Console'}}>
    <th style={{padding:'5px'}}>Order Id</th>
    <th style={{padding:'5px'}}>Customer Id</th>
    <th style={{padding:'5px'}}>Menu Id</th>
    <th style={{padding:'5px'}}>Vendor Id</th>
    <th style={{padding:'5px'}}>Wallet Source</th>
    <th style={{padding:'5px'}}>Order Quantity</th>
    <th style={{padding:'5px'}}>Bill Amount</th>
    <th style={{padding:'5px'}}>Order Status</th>
    <th style={{padding:'5px'}}>Order Comments</th>
    
  </tr>
  </thead>
  {
    orders.map( order => 
      <tr style={{fontFamily:'monospace,Lucida Console'}}>
        <td style={{padding:'5px'}}>{order.ordId}</td>
        <td style={{padding:'5px'}}>{order.cusId}</td>
        <td style={{padding:'5px'}}>{order.menId}</td>
        <td style={{padding:'5px'}}>{order.venId}</td>
        <td style={{padding:'5px'}}>{order.walSource}</td>
        <td style={{padding:'5px'}}>{order.ordQuantity}</td>
        <td style={{padding:'5px'}}>{order.ordBillamount}</td>
        <td style={{'color': order.ordStatus === 'DENIED' ? 'red': 'grey'}}>{order.ordStatus}</td>
        <td style={{padding:'5px'}}>{order.ordComments}</td>
        
      </tr>
  )
  }
</table>

  </div>;
}
  }
// export default connect(
//     ({ customerPendingOrders }) => ({ ...customerPendingOrders }),
//     dispatch => bindActionCreators({ ...customerPendingOrdersActions }, dispatch)
//   )( customerPendingOrders );