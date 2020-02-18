import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      newTask: ""
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  addingTasks = () => {
    console.log(this.state.customers);
    //axios.post('http://localhost:5000/?')
    let c = this.state.customers;
    c.push({ "name": this.state.newTask, "completed": false });
    //reset input value
    this.setState({
      newTask: '',
      customers: c,
    });
  }

  update = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //newTask = userInput
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addingTasks();
  }


  render() {
    return (
      <div>
        {
          this.state.customers.map((uid, ind) => {
            let lineStyle;
            if (uid.completed === true) { lineStyle = 'line-through'; }
            else { lineStyle = 'none'; }

            return <li key={ind} style={{ textDecorationLine: lineStyle }}>{uid.name}</li>
          })
        }
        <form onSubmit={this.onSubmit}>
          <input type='text' name='newTask' value={this.state.newTask} onChange={this.update}></input>
        </form>
        <button onClick={this.addingTasks}> LOSER </button>
      </div>
    );
  }
}

export default Customers;
