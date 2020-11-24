import React, { Component } from 'react'
import axios from 'axios'
import './Advice.css'
import {Card,Button} from 'react-bootstrap'


class Advice extends Component {
    state ={advice:''}

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice =() =>{
        axios.get("https://api.adviceslip.com/advice")
            .then((response)=>{
                const{advice} = response.data.slip;
               this.setState({advice});
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render() {
        return (
          <div className="Advice">
            <Card style={{ width: "30rem", height: "13rem" }}>
              <Card.Body>
                <blockquote className="text-center p-3 header">
                  {this.state.advice}
                </blockquote>
                <Button onClick={this.fetchAdvice}>Give Me Advice!</Button>
              </Card.Body>
            </Card>
          </div>
        );
    }
}

export default Advice
