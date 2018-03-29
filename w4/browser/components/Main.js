import React, {Component} from 'react';
import axios from 'axios';

import StudentList from './StudentList.js' 
import SingleStudent from './SingleStudent.js' 
import NewStudentForm from './NewStudentForm.js' 

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [],
            selectedStudent : {},
            showStudent : false
        }

        this.selectStudent = this.selectStudent.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        console.log("fetching")
        axios.get('/student')
        .then(res => this.setState({students: res.data}))
        .catch(console.error)
    }

    selectStudent(student) {
        return this.setState({
            selectedStudent : student
        })
    }

    handleClick(e) {
        return this.setState({
            showStudent : !this.state.showStudent
        })
    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <button onClick={this.handleClick}>Add Student</button>
                {
                    this.state.showStudent ? <NewStudentForm /> : null
                }
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tests</th>
                        </tr>
                    </thead>
                    < StudentList students={this.state.students} selectStudent={this.selectStudent} />
                </table>
                {
                    this.state.selectedStudent.id ? <SingleStudent student={this.state.selectedStudent} /> : null
                }
               
            </div>
        )
    }
}