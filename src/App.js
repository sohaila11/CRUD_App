import React, {Component} from 'react';
import CourseForm from './components/CourseForm/CourseForm'
import CourseList from './components/CourseList/CourseList'
class App extends Component{
  state ={
    courses:[
      {name:"Html"},
      {name:"CSS"},
      {name:"jQuery"},
    ],
    current : '',
  }

  //updateCourse
  updateCourse = (e) =>{
    this.setState({
      current : e.target.value
    })
  }
  //addCourse
  addCourse =(e)=>{
    e.preventDefault();
    let current = this.state.current
    let courses = this.state.courses
    if (current !== ''){
      courses.push({name:current})
      this.setState({
        courses,
        current:''
      })
    }else{
      this.setState({
        courses
      })
    }
  }
  //delete course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }

  //edit Course

  editCourse = (index , value) =>{
    let courses = this.state.courses
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })
  }

  render(){
    const {courses} = this.state
    const courseList = courses.map((course , index)=>{
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return(
      <section className = "App">

        <h2>Add Course</h2>
        <CourseForm Current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} length={this.state.courses.length}/>
        <ul>{courseList}</ul>
      </section>
    );
  }
}
export default App;
