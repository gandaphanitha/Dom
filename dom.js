// const element=document.all 
// console.log(element)

// const element=document.URL
// const element=document.images
// console.log(element)

// to change style 

// const element=document.querySelector(".child1")
// element.style.backgroundColor='red' ;
// console.log(element)

// replace className

// const element=document.querySelector(".child1")
// // element.className="bgred";
// element.className+=" bgred";
// console.log(element)


// classlist
// add,remove,contain,toggle,item,length 
// const element=document.querySelector(".child1").classList.add("bgred","dottedborder")
// const element=document.querySelector(".child1").classList.remove("dottedborder")
// const element=document.querySelector(".child1").classList
// const element1=document.querySelector(".child1").classList.toggle("bgred",)
// const element=document.querySelector(".child1").classList.contains("bgred",)
// if(element){
//     console.log("TRUEEE")
// }
// else{
//     console.log("FALSEEE")
// }
// const element=document.querySelector(".child1").classList
// const item=element.length
// let element=document.getElementById("page").classList
// let item=element.item(0)
// console.log(item)














// parent element
// const element=document.querySelector(".childbox").parentElement;
// console.log(element)

// const element=document.body.parentElement
// console.log(element)

// parent node
// const element=document.querySelector(".childbox").parentNode;
// console.log(element)

// const element=document.querySelector("#koko").parentNode;
// console.log(element)

// children 
// const element=document.querySelector(".childbox").children;
// console.log(element)

// childNode
// const element=document.querySelector(".childbox").childNodes;
// console.log(element)

// firstelement child

// const element=document.querySelector(".childbox").firstElementChild;
// console.log(element)

// lastelement child

// const element=document.querySelector(".childbox").lastElementChild;
// console.log(element)

// firstChild
// const element=document.querySelector(".childbox").firstChild;
// console.log(element)

// lastChild
// const element=document.querySelector(".childbox").lastChild;
// console.log(element)


// const element=document.querySelector(".child3").previousElementSibling;


// const element=document.querySelector(".child3").nextElementSibling
// element.style .backgroundColor="red"
// console.log(element)


// const element=document.querySelector(".child3").nextSibling;


// const element=document.querySelector(".child3").previousSibling;
// console.log(element)

// =======================16/04/2024==============>
// CreateElement
// const newElement=document.createElement("h1")
// console.log(newElement)

// create TextNode
// const newText=document.createTextNode("Hello world")
// console.log(newText)

// how to insert text in tag  by using append Method

// Append method 
// const newElement=document.createElement("h1")
// const newText=document.createTextNode("Hello world")
// newElement.append(newText)
// console.log(newElement)

// how to insert js code in html code

// const targetElement=document.querySelector(".childbox")
// const newElement=document.createElement("h1")
// const newText=document.createTextNode("Hello world")
// newElement.append(newText)
// targetElement.append(newElement)
// console.log(newElement)


// insertBefore:we can insert element before the targeted element


// const targetElement=document.querySelector(".childbox")
// const newElement=document.createElement("h1")
// const newText=document.createTextNode("Hello world")
// newElement.append(newText)
// targetElement.insertBefore(newElement,targetElement.children[0])
// console.log(newElement)

// insertAdjacentElement:it is going to capable of two things 1)beforebegin:using this text we wre tell where you have to insert

// const newElement=document.createElement("h1")
// const newText=document.createTextNode("Hello world")

// const targetElement=document.querySelector(".childbox")
// newElement.append(newText)
// // targetElement.insertAdjacentElement("beforebegin",newElement)
// // targetElement.insertAdjacentElement("afterbegin",newElement)
// // targetElement.insertAdjacentElement("beforeend",newElement)
// // targetElement.insertAdjacentElement("afterend",newElement)
// console.log(newElement) 

// insertAdjacentHTML
// const targetElement=document.querySelector(".wrapper")
// const htmlContent="<div><p>mohan</p></div>"
// targetElement.insertAdjacentHTML("beforebegin",htmlContent)

// insertAdjacentText
// const body=document.body 
// const targetElement=document.querySelector(".wrapper")
// const htmlContent="Mohan"
// targetElement.insertAdjacentText("beforebegin",htmlContent)
// console.log(body)

// replacechild()

// const newchild=document.createElement("h1")
// const text=document.createTextNode("This is new ")
// newchild.append(text)
// const parentElement=document.querySelector(".parent")
// const targetedchild=parentElement.children[0]
// parentElement.replaceChild(newchild,targetedchild)
// console.log(targetedchild)

// remove()
// const parentElement=document.querySelector(".parent")
// const targetedChild=parentElement.children[0]
// parentElement.removeChild(targetedChild)
// console.log(targetedchild)


// hasAttribute
// hasChildNode   these methods are going to return boolean values means true or false 


// hasAttribute
// const parentElement=document.querySelector(".parent")
// const checkAttribute=parentElement.hasAttribute("class")
// console.log( checkAttribute)


// hasChildNOde
// const parentElement=document.querySelector(".parent")
// const checkAttribute=parentElement.hasChildNodes()
// console.log( checkAttribute)

// hasChildNodes

// const parentElement=document.querySelector(".para")
// const checkAttribute=parentElement.hasChildNodes()
// console.log( checkAttribute)

// contains
// const parentElement=document.querySelector(".parent")
// const findwrapper=document.querySelector(".wrapper")
// const checkResult=parentElement.contains(findwrapper)
// console.log(checkResult)




// =====================Events================


// const btnElement=document.querySelector("#btn-click")
// btnElement.addEventListener("click",printSomething)
// function printSomething(){
//     console.log(printSomething)
// }
  
// btnElement.addEventListener("click",function(){
//     console.log("hello")
// })

// btnElement.addEventListener("click",()=>{
//     console.log("hello")
// })

// ==========keypress=============
// const btnElement=document.querySelector("#inputfield")
// btnElement.addEventListener("keypress",printSomething)
// function printSomething(){
//     // console.log(event.target.id)
//     console.log(printSomething)
// }

// ========keyup=====

// const btnElement=document.querySelector("#inputfield")
// btnElement.addEventListener("keyup" ,printSomething)
// function printSomething(){
//     console.log("hai")
// }


// scroll 

// const btnElement=document.querySelector("#inputfield")
// btnElement.addEventListener("scroll",printSomething)
// function printSomething(){
//     // console.log(event.target.id)
//     console.log("scroll is triggered")
// }



// const myBatch=[
//     "nasir","pavani","sandhya","nirmala"
// ]
// const showName=document.querySelector(".studentName");
// const btn=document.querySelector(".btn");
// btn.addEventListener("click",selectStudent)
// function selectStudent(){
//     const randomIndex=Math.floor(Math.random()*myBatch.length)
//     const randomName=myBatch[randomIndex]
//     showName.textContent=randomName 
//     // console.log(randomName)
// }

// function robo(){
//     console.log("hai")
// }
// function chitti(){
//     console.log("bye")
// }

// const onclickelement=document.querySelector("#wrapper")
// onclickelement.addEventListener("click",printsomething)

// function printsomething(){
//     console.log("hai")
// }
// const ondbclickelement=document.querySelector("#wrapper1")
// ondbclickelement.addEventListener("dblclick",robo)
// function robo(){
//     console.log("bye")
// }


// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mousedown",robo)
// function robo(){
//     console.log("bye")
// }


// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mousemove",robo)
// function robo(){
//     console.log("bye")
// }

// =============mouseout===========
// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mouseout",robo)
// ondbclickelement.style.color='red'
// function robo(){
//     console.log("bye")
// }

// =============mouseleave==============


// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mouseleave",robo)
// ondbclickelement.style.color='red'
// function robo(){
//     console.log("bye")
// }

// ============mouseover==============

// const ondbclickelement=document.querySelector("#wrapper")
// ondbclickelement.addEventListener("mouseover",robo)
// function robo(){
//     console.log("bye")
// }

// ===========mouseenter=====
// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mouseenter",robo)
// function robo(){
//     console.log("bye")
// }


// mouseDown

// const ondbclickelement=document.getElementById("wrapper")
// ondbclickelement.addEventListener("mousedown",robo)
// ondbclickelement.style.color="red"
// function robo(){
//     console.log("bye")
// }

// =====mouseUp============

// const ondbclickelement = document.getElementById("wrapper");
// ondbclickelement.addEventListener("mouseup", robo);
// ondbclickelement.style.color = "red";

// function robo() {
//     console.log("bye");
// }


// const ondbclickelement = document.getElementById("wrapper");
// ondbclickelement.addEventListener("mouseenter", robo);
// ondbclickelement.style.color = "red";

// function robo() {
//     console.log("bye");
// }


// =========mouseEnter==========

// const ondbclickelement = document.getElementById("wrapper");
// ondbclickelement.addEventListener("mouseenter", robo);
// ondbclickelement.style.color = "red";

// function robo() {
//     console.log("bye");
// }


// ========mouseLeave=======

// const ondbclickelement = document.getElementById("wrapper");
// ondbclickelement.addEventListener("mouseleave", robo);
// ondbclickelement.style.color = "red";

// function robo() {
//     console.log("bye");
// }

// ===========================Form Events================

// const formWrapper=document.querySelector("#formwrapper");
// const nameInputField=document.querySelector("#nameInputField");
// const selectInput=document.querySelector("#selectInput");
// nameInputField.addEventListener("input",print)
// function print(){
//     console.log("hello")
// }

const formwrapper = document.querySelector("#formwrapper");
const nameInputField = document.querySelector("#nameInputField");
const selectInput = document.querySelector("#selectInput")
// nameInputField.addEventListener("input",printAlphabet)

// function printAlphabet() {
//     console.log(this.value);
// }

// thiskeyword:

// In simple terms, when you use the this keyword in JavaScript for form events like when someone submits a form or types something in a field, it usually means the thing that was directly involved in causing the event.

// For instance, if you're listening for when someone submits a form, this would refer to that specific form. If you're listening for when someone types in a text box, this would refer to that particular text box.

// It's like saying, "Hey, what's going on with this thing right here?" So, you can use this to interact with the form or the input field directly without having to find it specifically by its ID or class.


// change 

// selectInput.addEventListener("change",printAlphabet)
// function printAlphabet(){
//     console.log(this.value)
// }

// select

// const nameInputField = document.querySelector("#nameInputField");
// nameInputField.addEventListener("select", selectEvent);

// function selectEvent() {
//     console.log(nameInputField.value);
// }

// focus 

// nameInputField.addEventListener("focus",focusevent)
// function focusevent(){
//     nameInputField.computedStyleMap.border="none";
//     nameInputField.computedStyleMap.outline="2px solid green";
// }

// blur 
// nameInputField.addEventListener("blur",focusevent)
// function focusevent(){
//     // nameInputField.computedStyleMap.border="none";
//     nameInputField.computedStyleMap.outline="2px solid green";
// }

// invalid

// emailInputField.addEventListener("invalid",invalidEvent)
// function invalidEvent(){
//     alert("email is invalid")
// }

// SubmitEvent ///its working
// formwrapper.addEventListener("submit",SubmitEvent)
// function SubmitEvent(){
//     // console.log(e)
//     // e.preventDefault();
//     console.log("form submitted successfully")

// }





