import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
        <div className="container">
         
            <h6 className="footer-copyright text-center py-3">
            <hr />
            &copy; {new Date().getFullYear()}, Designed By: <a href="https://maazabdullah.netlify.app/"> Maaz Abdullah </a>
            </h6>
           
            </div>
    
        );
    }

}

export default Footer