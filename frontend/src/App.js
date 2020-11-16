import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../src/components/navbar.component"
import Footer from "../src/components/footer.component"

class App extends React.Component {
  render() {
    return(
      <>
     <Navbar />
     <Footer />
     </>
    )
  }
}

export default App;
