import React, {Component} from 'react';
import './customerWallet.scss'
import Menu from '../menu/menu';
import  axios  from 'axios';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerWalletActions from "../../store/customerWallet/actions";
export default class customerWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wallet : []
        };
    }

    componentDidMount() {
      let cid = localStorage.getItem("cid")
      axios.get("http://localhost:8585/showCustomerWallet/"+cid)
      .then(response => {
        this.setState({
          wallet : response.data
        })
        console.log(response.data)
       // localStorage.setItem("cid",response.data.cusId);
   //     alert(localStorage.getItem("cid"))
      })
    }

    render() {
      const {wallet} = this.state
      return <div className="component-customer-wallet">
        <Menu></Menu> <br/> <br></br> <br></br> <br></br><br></br><br></br>
        <table border="3" align='center' style={{padding:'5px'}}>
      <tr style={{fontFamily:'monospace,Lucida Console'}}>
        <th style={{padding:'5px'}}>Customer Id</th>
        <th style={{padding:'5px'}}>Wallet Id</th>
        <th style={{padding:'5px'}}>Wallet Source</th>
        <th style={{padding:'5px'}}>Wallet Amount</th>
      </tr>
      {
        wallet.map( w => 
          <tr style={{fontFamily:'monospace,Lucida Console'}}>
            <td style={{padding:'5px'}}>{w.cusId}</td>
            <td style={{padding:'5px'}}>{w.walId}</td>
            <td style={{padding:'5px'}}>{w.walSource}</td>
            <td >{w.walAmount}</td>
            
          </tr>
      )
      }
    </table>

      </div>;
    }
  }
// export default connect(
//     ({ customerWallet }) => ({ ...customerWallet }),
//     dispatch => bindActionCreators({ ...customerWalletActions }, dispatch)
//   )( customerWallet );