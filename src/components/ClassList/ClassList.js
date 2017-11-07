import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    let promise = axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    promise.then(res => {
      this.setState({
        students: res.data
      })
    }).catch(console.log)
  }

  render() {
    let students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name}
          {student.last_name}
        </h3>
      </Link>
    ))

    return (
      <div className="box">
        <div className='back-btn'>
          <Link to='/'>Back</Link>
        </div>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }

}