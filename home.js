// sychron Asychron
let item = {}
async function loadData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json1 = await response1.json();
        // console.log(json1);

        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json2 = await response2.json();
        // console.log(json2);

        const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
        const json3 = await response3.json();
        // console.log(json3);

        const response4 = await fetch('https://jsonplaceholder.typicode.com/albums/1');
        const json4 = await response4.json();
        // console.log(json4);

        const response5 = await fetch('https://jsonplaceholder.typicode.com/photos/1');
        const json5 = await response5.json();
        // console.log(json5);

        const response6 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json6 = await response6.json();
        // console.log(json6);
        return [json1, json2, json3, json4, json5, json6]
        
    } catch (error) {
        console.log('Terjadi kesalahan: ' + error);
    }
}

loadData().then(([json1, json2, json3, json4, json5, json6])=>{
    let result = document.getElementById("result")
    result.innerHTML=json1.id
    
    console.log(json1, json2, json3, json4, json5, json6, 'ni x');
})


console.log(loadData(), 'item');



// Promises 

// let Esther = new Promise ((resolve, reject)=>{
//     const x = 7
//     const y = 6
//     if (x === y){
//         resolve()
//     }
//     else {
//         reject()
//     }
// }
// )

// Esther.then(()=>{
//     document.getElementById('result').innerHTML='x + y equals 12'
// }
    
// ).catch(()=>{
//     document.getElementById('result').innerHTML='Error!, X not Equal to Y'
// }
    
// )



//Callback Functions

// const courses = [
//     {'courseID': 1111, 'title': 'Introduction to Business', 'Duration': '2 Months'},
//     {'courseID': 2222, 'title': 'Introduction to Marketing', 'Duration': '3 Months'},
//     {'courseID': 3333, 'title': 'Technology', 'Duration': '6 Months'}
// ]


// function Courses () {
//     setTimeout(()=>{
//         let result =''
//         courses.forEach((course)=>{
//             result+= `<li> courseID = ${course.courseID}, title =  ${course.title}, Duration = ${course.Duration}</li>`
//         })
//         document.getElementById('result').innerHTML = result
//     }, 1000
        
//     )
// }

// function newCourses (post, callback){
//     setTimeout(()=> {
//         courses.push(post)
//         callback()
//     }, 3000
        
//     )
// }

// newCourses (
//     {'courseID': 4444, 'title': 'Science', 'Duration': '11 Months'}, Courses
// )



// synch asynch

// const change = time => {
//     return new Promise(
//         resolve => setTimeout(resolve, time * 1000)
//     )
// }

// const New = async()=>{
//     document.getElementById('first').innerHTML="Yes You Can!"
//     await change(2)
//     document.getElementById('second').innerHTML="Yes We Can!"
//     await change (4)
//     document.getElementById('third').innerHTML="Together We Can!"
    
//     await change(5)
//     document.getElementById('btn').innerHTML=`<button> SIGN UP NOW ! </button>`
// }

// New()