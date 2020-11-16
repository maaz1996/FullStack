import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../src/components/navbar.component"
import Footer from "../src/components/footer.component"
import Cards from "../src/components/Cards/cards.component"
class App extends React.Component {
  render() {
    return(
      <>
     <Navbar />
     <Cards />
     <Footer />
     </>
    )
  }
}

export default App;
