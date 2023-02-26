// read: 
const courseModel = require("../models/courseModel");
module.exports.getAllCourses = async ()=>{
    return await courseModel.find({});
}

// create: 
module.exports.createFirstCourse = async ()=>{
    const courses = await courseModel.find({});
    if(courses && courses.length == 0){
        const firstInputCourse = {
            "title" : "Web-dev",
            "level" : "Easy"
        };
        const course = new courseModel(firstInputCourse);
        await course.save();
    }
}