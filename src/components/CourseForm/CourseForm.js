import React from 'react'

const CourseForm = (props) =>{
    let length = props.length
    return(
        length ?(
            <form onSubmit={props.addCourse}>
                <input type="text" value = {props.Current} onChange={props.updateCourse}/>
                <button type="submit">Add Course</button>
            </form>
        ) : (
            <form onSubmit={props.addCourse}>
                <input type="text" value = {props.Current} onChange={props.updateCourse}/>
                <button type="submit">Add Course</button>
                <p>There is no course to show</p>
            </form>
        )
    )
}
export default CourseForm