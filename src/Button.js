import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './button.css';

class Button extends Component{
    constructor(props) {
        super(props);
        this.state={
            text:this.props.button_text,
            hovered:false
        }
    }

    onClickHandler(){
        console.log("clocked")
    }

    render() {
        return(
          <div
              onMouseOver={() => this.setState({hovered:true})}
              onMouseOut={() => this.setState({hovered:false})}
              onClick={this.onClickHandler}
              className={`${this.state.hovered ? "button-hovered" : "button-unhovered" }`}>

              <Link to="/about" className={`${this.state.hovered ? "button-text-hovered" : "button-text-unhovered" }`}>
                  {this.state.text}
              </Link>
          </div>
        );
    }


}

export default Button;