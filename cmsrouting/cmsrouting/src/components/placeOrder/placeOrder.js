import React, {Component} from 'react';
import './placeOrder.scss'
import Menu from '../menu/menu';
import { withRouter } from '../../withRouter';
import acceptOrderReject from '../acceptOrderReject/acceptOrderReject';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeOrderActions from "../../store/placeOrder/actions";
export  class placeOrder extends Component {
     constructor(props) {
         super(props);
         let cid = localStorage.getItem("cid");
         this.state = {
          customerId:cid,
          menuId:'',
          vendorId:'',
          walSource:'PAYTM',
          wallets: [],
          isaccepted:true,
          qty:'',
          comments:''
         };
     }
     changeCustomerId(event) {  
      this.setState({  
          customerId : event.target.value
      });
    }  

      changeVendorId(event) {  
        this.setState({  
            vendorId : event.target.value
        });  
      }

      changeMenuId(event) {  
        this.setState({  
            menuId : event.target.value
        });  
      }

      changeWalSource(event){  
        this.setState({  
            walSource : event.target.value
        });  
      }

      changeQty(event){  
        this.setState({  
            qty : event.target.value
        });  
      }

      changeComments(event){  
        this.setState({  
            comments : event.target.value
        });  
      }
      changeIsaccepted(event){
          setTimeout(() => {
            this.setState({
          isaccepted:previousisaccepted => !previousisaccepted
        })
      }, 6000);
      }
      componentDidMount() {
        axios.get('http://localhost:8585/getallwalletsource/'+this.state.customerId)
        .then(response => {
          this.setState({
            wallets: response.data
          });
        }).catch(error => {
          console.log(error);
        }
        );
      }


      placeOrd = () => {
        axios.post('http://localhost:8585/placeOrder',
      { cusId: this.state.customerId, venId: this.state.vendorId, 
        menId: this.state.menuId, walSource: this.state.walSource, 
        ordQuantity: this.state.qty, ordComments: this.state.comments },)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
      })
      }
      timer () {
      //  this.props.acceptOrderReject 

      }
    render() {
      const {wallets} = this.state;

      let walletList = wallets.length > 0
		  && wallets.map((item) => {
		    return (
			    <option value={item}>{item}</option>
		    )
	    }, this);
      return <div className="component-place-order">
        <Menu/> <br/>
        <table border="3" align="center" class="styled-table-place">
        <thead>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th colSpan="2">PlaceOrder</th>
        </tr>
        </thead>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>Customer Id</th>
          <td><input type="text" id="customerId" value={this.state.customerId} onChange={this.changeCustomerId.bind(this)}></input></td>
        </tr>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>Menu Id</th>
          <td><input type="text" id = "menuId" value={this.state.menuId} onChange={this.changeMenuId.bind(this)}></input></td>
        </tr>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>Vendor Id</th>
          <td><input type="text" id = "vendorId" value={this.state.vendorId} onChange={this.changeVendorId.bind(this)}></input></td>
        </tr>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>WalletSource</th>
          <div>
        <form style={{fontFamily:'monospace,Lucida Console'}}>
        <label>
          <select value={this.state.walSource} style={{fontFamily:'monospace,Lucida Console'}} onChange={this.changeWalSource.bind(this)}>
          {walletList}
          </select>
        </label>  
      </form>
      </div>
        </tr>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>Order Quantity</th>
          <td><input type="text" id="qty" value={this.state.qty} onChange={this.changeQty.bind(this)}></input></td>
        </tr>
        <tr style={{fontFamily:'monospace,Lucida Console'}}>
          <th>Order Comments</th>
          <td><input type="text" id="comments" value={this.state.comments} onChange={this.changeComments.bind(this)}></input></td>
        </tr>
        <tr>
          <th align='center' colSpan="3"><input type="button" style={{fontFamily:'monospace,Lucida Console'}} value="PlaceOrder" onClick={this.placeOrd}></input></th>
        </tr>
        </table>
        {!this.state.isaccepted ? <acceptOrderReject onSave= {this.timer.bind(this)} /> : null}
        </div>;
    }
  }

  export default withRouter(placeOrder);
// export default connect(
//     ({ placeOrder }) => ({ ...placeOrder }),
//     dispatch => bindActionCreators({ ...placeOrderActions }, dispatch)
//   )( placeOrder );