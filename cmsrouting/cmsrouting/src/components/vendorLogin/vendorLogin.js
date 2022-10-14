import React, {Component} from 'react';
import './vendorLogin.scss'
import { withRouter } from '../../withRouter';
import  axios  from 'axios';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export  class vendorLogin extends Component {
   
  changeUserName(event) {  
    this.setState({  
        userName: event.target.value
    });  
  }
  changePassword(event) {  
    this.setState({  
        passWord: event.target.value
    });  
  }
  login = () => {
    let user = this.state.userName
    let pwd = this.state.passWord
    // alert(user+" "+pwd)
    axios.get("http://localhost:8585/vendorAuthenticate/"+user+"/"+pwd)
    .then(response => {
      if (response.data=='1') {
        localStorage.setItem("vuser",user)
        this.props.navigate("/vendorMenu")
      }
     // alert(response.data)
     // result = response.data
      // this.setState({
      //   customers : response.data 
      // })
      console.log(response.data)
    })
    // if (this.state.userName=="Hexaware" && this.state.passWord=="Hexaware") {
    //   //alert("Correct Credentails...");
    //   this.props.navigate("/menu")
    // } else {
    //   alert("Invalid Credentials...")
    // }
  }
  constructor(props) {
        super(props);
        this.state = {
          userName:'',
          passWord:'',
          result : ''
        };
    }
    render() {
      return <div className="component-login">
          <table border="3" className="styled-table-login">
            <thead>
            <tr>
              <th align='center' colSpan="2">
                Login Page
              </th>
            </tr>
            </thead>
            <tr>
              <th>User Name </th>
              <td>
              <input type="text" id="userName"
                 value={this.state.userName} 
                 onChange={this.changeUserName.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input type="password" id="passWord"
                   value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} />
              </td>
            </tr>
            <tr>
              <th align='center' colSpan="2">
                <input type="button" id = "btn-vl" value="Login" onClick={this.login}  />
              </th>
            </tr>
            </table>
        </div>;
    }
  }
  export default withRouter(vendorLogin);
// export default connect(
//     ({ vendorLogin }) => ({ ...vendorLogin }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( vendorLogin );