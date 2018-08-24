import React, { Component } from 'react';

class Counter extends Component {
   
    state = {
        count:0
    }
    render() {
        return (
            <div className='counter' onClick={this.climb}>
              couter: {this.state.count}
            </div>
        );
    }
    climb = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
}

export default Counter;