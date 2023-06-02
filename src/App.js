import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { PlusSquare } from 'react-bootstrap-icons';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  componentDidMount() {
    // console.log('componentDidMount called');
    const counters = JSON.parse(localStorage.getItem('counters'));
    if (counters) {
      this.setState({ counters });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate called');
    if (prevState.counters !== this.state.counters && this.state.counters ) {
      localStorage.setItem('counters', JSON.stringify(this.state.counters));
    // console.log('componentDidUpdate called22222');

    }
  }

    handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({ counters });
      // const updatedCounters = this.state.counters.map((counter) => {
      //   if (counter.id === id) {
      //     return { ...counter, value: counter.value + 1 };
      //   }
      //   return counter;
      // });
      // this.setState({ counters: updatedCounters });
    };

    handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters });
    };

    handleReset = () => {
      const counters = this.state.counters.map((counter) => {
        counter.value = 0;
        return counter;
      });
      this.setState({ counters });
    };

     addItem = () => {
      const counters = this.state.counters;
      counters.push({ id: counters.length+1, value: 0 });
      // for (let i = 7; i <= 10; i++) {
      // }
      this.setState({ counters });
      console.log(counters)
    };

    render() {
      return (
        <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
            <PlusSquare
              color="royalblue"
              size={30}
              onClick={this.addItem}
            />
            <main className="container">
              <Counters 
                counters = {this.state.counters}
                onReset  = {this.handleReset}
                onDelete = {this.handleDelete} 
                onIncrement={this.handleIncrement}
              />
            </main>   
        </React.Fragment>
      );
    }
}

export default App;
