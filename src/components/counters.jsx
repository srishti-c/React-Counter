import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        return (  
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={()=>this.props.handleReset()}>Reset</button>
                {this.props.counters.map(counter =>
                    <Counter 
                        key={counter.id} 
                        counters={counter} 
                        selected={true} 
                        handleDelete={this.props.handleDelete}
                        handleCounter = {this.props.handleCounter}
                        handleDecrement = {this.props.handleDecrement}
                   />
                )}
            </div>
        );
    }
}
 
export default Counters;