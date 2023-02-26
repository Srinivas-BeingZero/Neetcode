// read: 
const courseModel = require("../models/courseModel");
module.exports.getAllCourses = async ()=>{
    return await courseModel.find({});
}

module.exports.createCourse = async (courseInput)=>{
    const course = new courseModel(courseInput);
    await course.save();
}

// update:
module.exports.updateCourse = async (courseId, updatedInput)=>{
    await courseModel.findOneAndUpdate({_id:courseId},updatedInput);
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