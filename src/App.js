import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display";
import axios from "axios";



class App extends Component {
  state = {
    Employee: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/api/employees').then(res => {
      this.setState({
        Employee: res.data
      });
      console.log(res.data);
    });
  };

  render() {
    let { Employee } = this.state;
    console.log(this.state);
    let mapped = Employee.map(employee => {
      return <Display key={employee.id} employee={employee} />;
    });

    return <div className="App">{mapped}</div>;
  }
}

export default App;
