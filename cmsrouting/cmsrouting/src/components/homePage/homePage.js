import React, { Component } from 'react';
import './homePage.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homePageActions from "../../store/homePage/actions";
export default class homePage extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-home-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="animate-charcter"> Welcome to Canteen Management System</h1>
          </div>
        </div>
      </div>
      <h2><Link style={{ textDecoration: 'none', fontFamily: 'monospace,Lucida Console' }} className="button" to="/login"><button>Customer Login</button></Link></h2>

      <h2><Link style={{ textDecoration: 'none', fontFamily: 'monospace,Lucida Console' }} className="button" to="/vendorLogin"><button>Vendor Login</button></Link></h2>

    </div>;
  }
}
//  export default connect(
//     ({ homePage }) => ({ ...homePage }),
//     dispatch => bindActionCreators({ ...homePageActions }, dispatch)
//   )( homePage );