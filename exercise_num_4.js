/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

const commonCourses = (arrCourses1, arrCourses2) => {
    return arrCourses1.filter(course => arrCourses2.includes(course));
}

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log(commonCourses(student1Courses,student2Courses));