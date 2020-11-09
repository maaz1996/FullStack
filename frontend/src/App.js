import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "../src/components/navbar.component"
import Outcode from "../src/components/outcode.component"
import Footer from "../src/components/footer.component"

function App() {
  return (
   <Router>
     <Navbar />
     <Route path="/" component={Outcode} />
     <Footer />
   </Router>
  
  );
}

export default App;
