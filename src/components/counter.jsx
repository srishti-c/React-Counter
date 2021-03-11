import React , {Component} from 'react'
//import { render } from '@testing-library/react'

export default class counter extends Component{

    formatCount(){
        const {value} = this.props.counters;
        return  (value === 0) ? 'Zero' : value;
    }

    
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counters.value === 0 ? "warning" : "primary";
        return classes;
    }

    render(){
        this.getBadgeClass();
        const {counters} = this.props;
        return (
            <div>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={()=>this.props.handleCounter(counters)}> + </button>
                <button className="btn btn-secondary btn-sm m-2" onClick={()=>this.props.handleDecrement(counters)} disabled={counters.value == 0 ? true : false}> - </button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.handleDelete(counters.id)}>X</button>
               
            </div>
        )
    }

}