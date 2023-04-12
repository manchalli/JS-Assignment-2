

//Question 1
// let input_1 = +prompt("enter no 1");
// let input_2 = +prompt("enter no 2");

// function parent_function(value_1){
//     return function child_functon(value_2){
//         console.log(value_1 + value_2);
//         // let a = 4;//scope error
//     }
// }

// let function_1 = parent_function(input_1);
// let function_2 = function_1(input_2);

//======================================================

//Question 2
//concept


/*
i = 0
array[0] = 2
no_to_search === array[0]  =>false
0 < array.length (7)=>true
i = i+1; => i = 1
array[1] = 4
no_to_search === array[1]  =>false
1 < array.length (7) =>true
i = i+1; => i = 2
array[2] = 5
no_to_search === array[6]  =>false
92 74
6 < 6
length = 1
index = 0
*/

// let arr = [2,4,5,67,90,74,92];

// let no_to_search = 10;

// let i = 0;

// function recursion(array){
//     if (no_to_search === array[i]){
//        console.log("true");
//     }
//     else if(i < array.length-1){ 
//         i = i+1; //i =1;
//         recursion(array);
//     }
//     else {
//        console.log("false");
//     }
// }
// recursion(arr);


// function recursion(array){
//     if (no_to_search === array[i]) {
//         return true;
//     }
//     else if(i < array.length-1){
//         i = i+1;
//         recursion();
//        }
//     else{ 
//         return;
//     }
// }

// //=========calling function
// recursion(arr);

// //=========printing true and flase
// if (recursion(arr)==true){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// function a (a) {
//     return a;
// }

// // function b (b){
// //     console.log(b)
// // }


// // a (3);
// console.log(a(4));
// // b (5);

//==============================================================

// Question 3

// let input_text = prompt("enter content:")
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// // console.log(parent);
// function para_work(string) {
//     para.innerHTML = string;
//     parent.appendChild(para);
//     parent.insertAdjacentElement("afterbegin", para);
// }

// para_work(input_text)

//=================================================================

//Question 4

// localStorage.clear()

// let object_1 = {
//     name:"khadija",
//     age: 18,
//     phone_no:"456789802376",
//     height:"5",
//     cnic: "5756875878"
//     eng_marks:100,
//     urdu_marks:50,
//     maths_marks:40
// }


// let object_2 = {
//     name:"ayesha",
//     age: 15,
//     phone_no:"0600458907",
//     height:"5'6",
//     cnic: "54356487676-5",
//     eng_marks:60,
//     urdu_marks:90,
//     maths_marks:70
// }


// let object_3 = {
//     name:"Fatima",
//     age: 19,
//     phone_no:"578788684",
//     height:"5'6",
//     cnic: "80585457986-9",
//     eng_marks:70,
//     urdu_marks:90,
//     maths_marks:60
// }

// function object_saving(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
// }


// object_saving("data of khadija" , object_1);
// object_saving("data of ayesha", object_2 );
// object_saving("data of  huda", object_3 );
// object_saving("data of khadija" , object_1);
// object_saving("data of ayesha", object_2 );
// object_saving("data of huda", object_3 );
