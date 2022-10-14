import React, {Component} from 'react';
import './showMenu.scss'
import Menu from '../menu/menu';
import  axios  from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuShowActions from "../../store/menuShow/actions";
export default class showMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus : []
    }; 
}
componentDidMount() {
  axios.get("http://localhost:8585/showMenu")
  .then(response => {
    this.setState({
      menus : response.data 
    })
    console.log(response.data)
  })

}
render() {
   const {menus} = this.state
  
  return <div className="component-menu-service">
    <Menu></Menu> <br/> <br></br> <br></br> <br></br><br></br>
    <table border="3" align='center'>
      <tr style={{fontFamily:'monospace,Lucida Console'}}>
        <th>Menu Id</th>
        <th>Menu Item</th>
        <th>Price</th>
        <th>Calories</th>
        <th>Speciality</th>
        
      </tr>
      {
        menus.map( menu => 
          <tr style={{fontFamily:'monospace,Lucida Console'}}>
            <td>{menu.menId}</td>
            <td>{menu.menItem}</td>
            <td>{menu.menPrice}</td>
            <td>{menu.menCalories}</td>
            <td>{menu.menSpeciality}</td>
            
          </tr>
      )
      }
    </table>

    </div>;
}

  }
// export default connect(
//     ({ menuShow }) => ({ ...menuShow }),
//     dispatch => bindActionCreators({ ...menuShowActions }, dispatch)
//   )( menuShow );