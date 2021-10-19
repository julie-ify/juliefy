import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }

  handleIncrement = (counter) => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = { ...counter };
   counters[index].value++;
   this.setState({counters})
  };

  handleDecrement = (counter) => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = { ...counter };
   counters[index].value--;
   this.setState({counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c
    });
    this.setState({ counters })
  }

  render() {
    return (
      <div>
      <span><button onClick={this.handleReset} className="btn btn-primary btn-md mt-5">Reset</button></span>
        <ul>
          {this.state.counters.map((counter) => (
            <Counter
            key={counter.id}
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
              counter={counter}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
