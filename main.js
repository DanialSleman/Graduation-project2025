
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;


// console.log (parseInt(Math.min(a,b,c,d)));
// console.log(a ** Math.trunc(d));

// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(d.toFixed(0));
// console.log(parseInt(d));


// // console.log(b / Math.ceil(d)); //66.67
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.round(b / Math.ceil(d)));//67



// console.log(("100").toString())
///////////////////////////////////////////// challange lesson number 26

///////////////////////////////////////////// challange lesson number 30
// let a = "Elzero web school";
// console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// console.log((a.charAt(13).toUpperCase()).repeat(8));//  HHHHHHHH

// console.log(a.split(" ",1));//  [Elzero]

// console.log(a.substr(0,6)+ a.substr(10)) //Elzero school

// console.log( (a[0]).toLowerCase() + (a.slice(1,-1)).toUpperCase() + a.charAt(a.length - 1).toLowerCase() );//

////////////////////////////////////////////////////////////////////////////////////////////////////
//  function showDetail(...mix){
//    let a=0;
//    let b=0;
//    let c=0;
//    for (let i =0 ;i<mix.length;i++)
//       {
//          if(typeof(mix[i])==="string"){
//              a=mix[i]
//          }else if(typeof(mix[i])==="number"){
//             b=mix[i]
//          }else if((mix[i])===false){
//             c="not avilable"} 
//             else{c="avilable"}
         
//       }
//       document.write(`<div>hi ${a} your age is ${b} and you ${c} for here</div>`)
//  }
 
//  showDetail(25,"don",false);
//  showDetail("don",25,true);
//  showDetail(false,25,"don");


//  التكليلف الاول
// function sayHello(theName,gender=""){ 

//     document.write(`<div>`);
//     if(gender==="Male"){
//       gender="Mr"
//      }else if (gender==="Female"){
//          gender="Miss"
//      }
//         document.write(`hello ${gender } ${theName}`);

    

//     document.write(`</div>`);

// }
// sayHello("don","Male")
// sayHello("lona","Female")
// sayHello("majd")
//////////////////////////////////////////////////////////////
/*function multiplay(...x){
     let n = 0;
    for(let i =0; i < x.length ;i++){
        if (typeof (x[i])==="string"){
            continue;
        }else {
             n= (x[i - 1]) *( x[ i])
             document.write(n)
        }
          
    }
}
multiplay(10,20,"x")
 multiplay("a",10,20)
multiplay(100.5,10,"b")*/
//  let names = function(...name){
//       return `string [${name.join("],[")}] => Done !`;
//  }
// console.log(names("don","mohamad","ali","ibrahem","lll","hhh"));
// string [don], [mohamad], [ali], [ibrahem] => Done !

// let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

//  let solution=myString.split("").map(function(ele){
//      return isNaN(ele)==true && ele!==","  ? ele : ""  ;

//  }) .join("")
//  console.log(solution);
 
// let my_p = document.querySelector("p");
 
// function copy(){
//     let newp = my_p.cloneNode(true);
//     newp.className = "one";
//     document.body.appendChild(newp);
// }
//  my_p.addEventListener("click",copy);
//  document.addEventListener("click",function(e){
//      if(e.target.className==="one"){
//          console.log( "i am cloned")
//      }
//  });
// /////////////////////////////////////////////////////////////////////////////////////////////////////// 
// let currentClass =document.getElementsByClassName("element current")[0];
 
// let oneInput = document.getElementsByClassName("classes-to-add")[0];
 
// let twoInput = document.getElementsByClassName("classes-to-remove")[0];
 
// let finalDiv = document.getElementById("one");



// oneInput.onblur= function(){
//       finalDiv.classList.add(oneInput.value);
//       finalDiv.appendChild(oneInput.value)
//      }
// twoInput.onblur= function(){
//     finalDiv.classList.remove(twoInput.value);

// }
//  let x = [ 1,2,3]
//  console.log(x)
 
//  let myObj = {};
//  let myMap = new Map();
//  let myEmptyObject = Object.create(null);
 
// console.log(myObj);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//     10 :"number",
//     "10": "string",
// }
//   console.log(myNewObject)
 
// let myNewMap = new Map()
// myNewMap.set(10,"number");
// myNewMap.set("10","string");
// myNewMap.set(["10", "don", ], "array");
// myNewMap.set( true,"boolean");
// myNewMap.set({10: "ali", 11: "nour"},"string");
// myNewMap.set(function dos(){console.log("hello")},"string");



// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("#######################")
// console.log(myNewObject);
// console.log(myNewMap);


// let my2map = new Map([
//     [111, "ali"],
//     [222, [1, 2, 3]],
//     [false, 9999]
// ])
// my2map.set("don =>", "lona");
// my2map.set("don", "alma");

// console.log(my2map.get("don =>"))
// console.log(my2map.get("don"))
// console.log(my2map);
// console.log(my2map.delete(2022));

//  let n1 = [10,30,10,20];
//  let n2 = [30,20,10];
// console.log([n2.length *, ...n1])

// function spinWords(string){
//     let arr = string.split(" ").join(" ");
//     console.log(arr);
//     for(let i =0 ; i<= arr.length; i++){
//       if (arr[i].length >= 5){
//         console.log( true)
//       }
//     }
//   }
//   spinWords("ali sleman")
 
// let x = "danial ali sleman";
// let y = x.split(" ");
// let z = []; 
// for (let i =0 ; i< y.length; i++){
//     if(y[i].length < 5 ){
//      z.push(y[i])
//     }
//     else{
//        z.push(y[i].split("").reverse().join(""));
        
//     }
 
//  console.log(z.join(" "))
   
// }  

// function reverseWord(text){
// arr = text.split(" ");
//    for(let i = 0 ; i < arr.length; i++){
//           if(arr[i].length >= 5){
//             arr[i] = arr[i].split("").reverse().join("");
//  console.log(arr[i])
// }
 
//         }
// return arr.join(" ");
// }
// console.log(reverseWord("danial ali sleman"));

console.log("#######################################");
// function reverseLongWords(syntax) {
//     return syntax.split(" ").map(e){e=>}
// }

// window is object
console.log("**************************************************") 

class User { 
#e;
    constructor(id, username, esalary) {
        this.i = id;
        this.u = username ;
        this.#e = esalary ;
    }
    dealWithe(){
        return parseInt(this.#e) * 0.5
    }
    changeName(newName){
        return this.u = newName;
    }
}
let userOne = new User(100,"ali","5000 dolar");


String.prototype.add1= function(val){
    return `.${val}.`
};
String.prototype.add2 = function(val){
    return `.${this}.`
};
let p = "don";
console.log(p.add1());
console.log(p.add2());

let u = "ahmad";
let l = new String("hamada");
String.prototype.light = "onnnnnnnnnnne";
console.log(u.light);
console.log(l);





// let str1 = "jak"
// console.log(String.prototype)


//  const location = { object
//      20:"place 1",
//      30:"place 2",
//      10:"place 3",
//      40:"place 4",

//  }

//  let mainLocation = 15;

//  let arrayLocation = Object.keys(locatio);
//  console.log(arrayLocation);
console.log("**************************************************") 

// setTimeout(()=> console.log("hello"),0)


// function one(){
//     console.log("one")
// }
// function two(){
//     one()
//     console.log("two")
// }
// function three(){
//     two()
//     console.log("three")
// }


// three()
// console.log("a");
// console.log("b")
// console.log("c")


let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send()
console.log(myRequest)

myRequest.onreadystatechange = function () {
    console.log(myRequest.readyState);
    console.log(myRequest.status);
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText)
    let jsData = JSON.parse(this.responseText)
    console.log(jsData)
    for(let i = 0; i< jsData.length ; i++){
        let div = document.createElement("div");
        let repo = document.createTextNode(jsData[i].name);
        div.appendChild(repo);
        document.body.appendChild(div)
    }
    }
}
         
function make(e){
    e.style.color = "red";
}
let o = document.querySelector(".four");

o.addEventListener("click",make)










