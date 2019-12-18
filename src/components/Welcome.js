import React, { Component} from "react";
// import {Jumbotron, Container,Row, Col} from 'react-bootstrap';
export class Welcome extends Component{    

    render(){
        return(
            <div >
            <h1 className="justify-content-center" style={{display: 'flex'}}>Hello I'm Sebastian Penttinen</h1>
            <h3 className="justify-content-center" style={{display: 'flex'}}>A Turku based software engineer</h3>
            </div>
        )
    }
}