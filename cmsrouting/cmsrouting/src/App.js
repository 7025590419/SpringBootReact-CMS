import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import VendorMenu from './components/vendorMenu/vendorMenu';
import VendorLogin from './components/vendorLogin/vendorLogin'
import VendorDashBoard from './components/vendorDashBoard/vendorDashBoard'
import VendorShow from './components/vendorShow/vendorShow'
import VendorPendingOrder from './components/vendorPendingOrder/vendorPendingOrder'
import VendorOrders from './components/vendorOrders/vendorOrders'
import HomePage from './components/homePage/homePage'

import CustomerPendingOrders from './components/customerPendingOrders/customerPendingOrders'
import CustomerOrders from './components/customerOrders/customerOrders'
import CustomerWallet from './components/customerWallet/customerWallet'
import CustomerShow from './components/customerShow/customerShow';
import CustomerDashBoard from './components/customerDashBoard/customerDashBoard';
import Menu from './components/menu/menu';
import Login from './components/login/login';
import AcceptOrderReject from './components/acceptOrderReject/acceptOrderReject';
import PlaceOrder from './components/placeOrder/placeOrder';
import ShowMenu from './components/showMenu/showMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vendorMenu" element={<VendorMenu/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashBoard" element={<VendorDashBoard />} />
        <Route path="/vendorShow" element={<VendorShow />} />
        <Route path="/vendorPendingOrder" element={<VendorPendingOrder />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />

        <Route path="/customerDashboard" element={<CustomerDashBoard />} />
        <Route path="/customerShow" element={<CustomerShow />} />
        <Route path="/customerWallet" element={<CustomerWallet />} />
        <Route path="/customerOrders" element={<CustomerOrders />} />
        <Route path="/acceptOrderReject" element={<AcceptOrderReject />} />
        <Route path="/showMenu" element={<ShowMenu />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/customerPendingOrders" element={<CustomerPendingOrders />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
