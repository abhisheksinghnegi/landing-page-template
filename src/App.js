import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Sign_up from './Components/Sign_up'
import AllMedicineList from './Components/AllMedicineList';
import AllMedicineListWrapper from './Components/AllMedicineListWrapper.jsx';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <div>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/drugsList" component={AllMedicineListWrapper} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/sign_up" component={Sign_up} />
			<ProtectedRoute exact path="/cart" component={Cart} />
			<ProtectedRoute exact path="/orders" component={Orders} />
			{/* <ProtectedRoute  */}
			<Redirect to="/" />
		</Switch>
		{/* <Footer/> */}
    </div>
  )
}

export default App
