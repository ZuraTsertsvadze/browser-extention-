/*let count =0;
 
let sudo=document.getElementById("sante");




function clicka(){
    count=count+1;
    sudo.innerText=count; 
};



let savepara=document.getElementById("para");

function save_btn(){
    
    savepara.textContent=savepara.textContent+'-'+count;
    sudo.innerText=count-count; 
    count=0;
}

// function reset_btn(){
//     sudo.innerText=count-count;   
// }*/


// /*let firstname='zura';
// let lastname='tsertsvadze';
//  let fullname=firstname+'  '+lastname;

// function zura(){

//     console.log('me mqvia'+firstname+'  '+lastname)

// }
//  zura();*/


// /*let myPoint=3;

// function add3Points(){
//     myPoint+=3
// }

// function remove1Point(){
// myPoint-=1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// function pasuxi(){
//    console.log(damateba())
// }
// remove1Point()
// console.log(myPoint);*/
// /*function clicka(){
// document.getElementById('error').innerText='dagerxa'
// }*/

// /*let number1=2;
// let number2=4;
// document.getElementById('number1').innerText=number1;
// document.getElementById('number2').innerText=number2;

// let sum=document.getElementById('pasuxi');

// function damateba(){

//     sum.innerText=sum.innerText+(number1+number2);

// }



// function gamravleba(){

//     sum.innerText=sum.innerText+number1*number2;

// }*/



// // let cardsi = []
// let sum = 0;
// let backjetgaq = false;
// let alive = false;
// let message = "";
// let sumbtn = document.getElementById("sum_btn");
// let cardbtn = document.querySelector(".cards")

// function render() {

//     if (sum <= 20) {
//         message = 'axali karti'
//     } else if (sum === 21) {
//         message = 'moige'
//         backjetgaq = true;
//     } else {
//         message = 'waage'
//         alive = false;
//     }

//     sumbtn.textContent = 'SUM:' + sum;

//     let messsageel = document.getElementById("sante");

//     messsageel.textContent = message;


//     console.log(cardsi)
//     for (let i = 0; i < cardsi.length; i++) {

//         cardbtn.textContent = cardbtn.textContent + cardsi[i]+"  ";
//     }

// };
// // cardsi.push(newcard)
// // function card() {
// //     sum = (sum + newcard);

// //     render()
// // }

// function start() {
//     let alive = true;
//     let firstCard=getRandom();
//     let secondCard = getRandom();
//     let cardsi = [firstCard,secondCard];
//     let sum=firstCard+secondCard;
//     render();


// function getRandom(){
//   let ram=Math.floor(Math.random()*11)+1;
//  if(ram>10){
//        return 10
//     }else if(ram===1){
//         return 11
//     }else{
//         return ram
//     }

// }
// };
// function getRandom2(){
//     let ram3=Math.floor(Math.random()*11)+1;
//     let ram2=Math.floor(Math.random()*11)+1;
//     if(true){
//         return ram3
//      }else{
//     return ram2
//   };


// }
// let nino=getRandom2();
// let gio=getRandom3();


// function getRandom3(){
//     let ram3=Math.floor(Math.random()*11)+1;
//     let ram2=Math.floor(Math.random()*11)+1;
//     if(true){
//         return ram3
//      }else{
//     return ram2
//   };
// ret

// }

// let masiv=[nino,gio]


// console.log(masiv);

// let playerinfo={
//     name:"zura",
//     chips:23
// }

// let infoOfPlayer=document.getElementById("player_info");

// infoOfPlayer.textContent="Player:"+playerinfo.name+","+playerinfo.chips;

// const Player={
//     name:"Zura",
//     age:18,
//     country:"Georgia"
// }



// function logData(){
//    const soso=`${Player.name} is ${Player.age} years old lives in ${Player.country}`
//  return soso
// } 



// console.log(logData())



// const age=30;
// function zurab(){




//     if(age<6){
// return "free trip"
//   }else if(age>=6 && age<=17){
//    return "child";
//  }else if(age>=18 && age<=26){
//     return"student";
// }else if(age>=27 && age<=66){
//   return "full";
// }else if(age>66 ){
//    return "senior";
// }else{return"d"}



// }

// console.log(zurab());



// const largestcountries =["china","india","usa","pakistan","indonesia"]

// function soso(){



//   // for(let i=0;i<1;i++){ 
//     let deda= "xuti didi qveyana:"
//     console.log(deda); 


//     for(let i=0;i<largestcountries.length;i++){ 
//   console.log("-"+largestcountries[i]) 
// }
// }
// console.log(soso())


// const largestcountries =["tualu","india","usa","pakistan","azer"]

// largestcountries.pop()
// largestcountries.shift()
// largestcountries.push('china')
// largestcountries.unshift('pakistan')

// console.log(largestcountries)

// const number=16;
// const day="monday";

// function mama(){

//   if( number===13 && day==="monday"){
//  return "go"
//   }else{
//     return "no"
//   }
// }

// console.log(mama())


// let hands=["rock","people","scissors",]


// function zura(){


//   let random=Math.floor(Math.random()*hands.length);

//   let ram=hands[random]
//   return ram

// }

// console.log(hands.length)



// let soso=["🍏","🍎","🍏","🍏","🍎"];

// let taro1=document.getElementById("susa");
// let taro2=document.getElementById("para");


//  function taro(){
// for(let i=0; i<soso.length; i++){
//   if(soso[i]==="🍏"  ){

//     taro1.textContent=soso[0]+soso[2]+soso[3];
//   }else if(soso[i]==="🍎"){

// taro2.textContent=soso[1]+soso[4];


//   }

// }




// }
// taro()

// const mam=document.getElementById("soso")

// mam.innerHTML="<button onclick='buy()'>buy</button>";



// function buy() {
//   mam.innerHTML+="<p>  thank you</p>"
// }

const input = document.getElementById("text");
const save = document.getElementById("button");
const ulElement = document.getElementById("ul-el");
const clear = document.getElementById("buttons");
let myLeads = [];
let inputEl = input;
let dad
clear.addEventListener("click", function () {
  dad = " ";
})

let dataFromLocal;
dataFromLocal=JSON.parse(localStorage.getItem("myLeads"))
console.log( dataFromLocal)
localStorage.clear()
save.addEventListener("click", function () {
  myLeads.push(input.value);
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  
  
  

  renderLeads();
 

  
})

function renderLeads() {

  let listItems = [];
  for (let i = 0; i < myLeads.length; i++) {

    listItems += `<li class='inp-list'>
     <a href= '${myLeads[i]}' target='_blank' class='soso'>${myLeads[i]}</a>
     </li>`;
    ulElement.innerHTML = listItems;
    // ulElement.innerHTML+="<li>"+myLeads[i]+"</li>";
    // const list=document.createElement("li")
    // list.textContent = myLeads[i]
    // ulElement.append(list)

  }

}


// const zura="soso";
// const sender="givi";

// const mam=`hey ${zura} how is it going? cheers ${sender}`

// console.log(mam)


// let zura=['dad','sdas','da','ds','da']
// zura=JSON.stringify(zura)



// console.log(typeof zura)