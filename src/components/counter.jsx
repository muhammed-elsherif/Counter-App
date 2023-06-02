import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Counter extends Component {
    
    // state = { 
    //     //local
    //     value: this.props.counter.value, 
    // };
    styles = {
        fontSize: 18,
        // fontWeight: "bold",
        // margin: 5,
        // backgroundColor: "yellow"
    };

    render() {
        return (
            <div className="m-2">
                <span style={this.styles} className={"badge bg-warning m-2"}>
                    {this.formatCount()}
                </span>
                <button className='btn btn-secondary btn-sm'
                        onClick={() => this.props.onIncrement(this.props.counter)}>
                    Increment
                </button>
                <button className="btn btn-danger btn-sm m-2"
                        onClick={() => this.props.onDelete(this.props.counter.id)}>
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        const { value } = this.props.counter;
        return value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
