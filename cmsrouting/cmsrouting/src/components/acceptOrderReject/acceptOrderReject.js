import React, {Component} from 'react';
import './acceptOrderReject.scss'
import VendorMenu from '../vendorMenu/vendorMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as acceptOrderRejectActions from "../../store/acceptOrderReject/actions";
export default class acceptOrderReject extends Component {
     constructor(props) {
         super(props);
         this.state = {
          oid:0,
          vid:0,
          status:'YES'
         };
     }

     changeOrderId(event){
      this.setState({
        oid: event.target.value
      });
     }

     changeVendorId(event){
      this.setState({
        vid: event.target.value
      });
     }

     changeStatus(event){
      this.setState({
        status: event.target.value
      });
     }

     acceptOrderReject = () =>{
      axios.post('http://localhost:8585/acceptOrRejectOrder/'+this.state.oid+'/'+this.state.vid+'/'+this.state.status,null)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
      })
     }

    render() {
      return <div className="component-accept-order-reject">
        <VendorMenu/>
        <br></br>
        <table border="2" align ="center">
          <tr>
            <th>Order Id</th>
            <td><input type="text" id="oid" value={this.state.oid} onChange={this.changeOrderId.bind(this)}/></td>
          </tr>
          <tr>
            <th background-colSpan= 'Gray'>Vendor Id</th>
            <td><input type="text" id="vid" value={this.state.vid} onChange={this.changeVendorId.bind(this)}/></td>
          </tr>
          <tr>
            <th>Status</th>
            <div>
        <form>
        <label>
          <select value={this.state.status} onChange={this.changeStatus.bind(this)}>
            <option value="YES">ACCEPT</option>
            <option value="NO">REJECT</option>
          </select>
        </label>  
      </form>
      </div>
          </tr>
          <tr>
            <th align='center' colSpan="2">
              <input type="button" value="Confirm" onClick={this.acceptOrderReject} />
            </th>
          </tr>
        </table>
        </div>;
    }
  }
// export default connect(
//     ({ acceptOrderReject }) => ({ ...acceptOrderReject }),
//     dispatch => bindActionCreators({ ...acceptOrderRejectActions }, dispatch)
//   )( acceptOrderReject );