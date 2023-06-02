import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, onDelete, onIncrement, counters} = this.props;
        return (
            <div>
                <button 
                    className='btn btn-primary btn-sm m-2'
                    onClick={onReset}>
                    Reset
                </button>
                {counters.map(counter => (
                        <Counter 
                            key={counter.id} //by react
                            // value={counter.value} 
                            // id={counter.id} 
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            counter={counter}>
                        </Counter>
                    ))}
            </div>
        );
    }
}

export default Counters;