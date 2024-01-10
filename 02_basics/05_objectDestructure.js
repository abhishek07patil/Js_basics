const course = {
    coursename: "JS in hindi",
    fees: 999,
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);    //Another

const {courseInstructor} = course         //Another
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);



// This is API

// {
//     "coursename": "Js in hindi",
//     "name": "Abhishek",
//     "fees": "Free"
// }